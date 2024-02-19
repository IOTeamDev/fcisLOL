"use client";
import {
	CardTitle,
	CardDescription,
	CardHeader,
	CardContent,
	CardFooter,
	Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { createVideo } from "../lib/db/videos/createVideo";

interface Props {
	user: any;
	subjectId: any;
	setShowModal: any;
}

const VideoForm = ({ user, subjectId, setShowModal }: Props) => {
	const { register, handleSubmit } = useForm();

	const onSubmit = async (data: any) => {
		const videoData = {
			...data,
			user: user.id,
			subject: subjectId,
		};
		try {
			await createVideo(videoData, user.rule);
		} catch (error) {
			toast.error("An error has occurred");
			throw error;
		}
		toast.success("Video Submitted successfully updated");
		setShowModal(false);
	};
	return (
		<div className=" p-5">
			<section className="flex justify-center items-center">
				<form
					onSubmit={handleSubmit((data: any) => onSubmit(data))}
					className=" flex flex-col gap-10"
				>
					<Card className="w-full max-w-3xl">
						<CardHeader>
							<CardTitle>Add Video 🎥</CardTitle>
							<CardDescription>
								Welcome to our video upload form! We're excited to have you
								share your content with us. Please fill out the following
								details to upload your video:
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="space-y-2">
								<Label htmlFor="url">URL</Label>
								<Input
									id="url"
									placeholder="Enter Video URL"
									{...register("url")}
									required
								/>
								<div className="space-y-2">
									<Label htmlFor="title">TITLE</Label>
									<Input
										id="title"
										placeholder="Enter Video Title"
										type="text"
										{...register("title")}
										required
									/>
								</div>
							</div>
							<div className="space-y-2">
								<Label htmlFor="description">DESCRIPTION</Label>
								<Input
									id="description"
									placeholder="Enter Video Description"
									type="text"
									{...register("description")}
									required
								/>
							</div>
						</CardContent>
						<CardFooter className="flex gap-5">
							<Button type="submit">Save</Button>
							<Button variant="ghost" onClick={() => setShowModal(false)}>
								Cancel
							</Button>
						</CardFooter>
					</Card>
				</form>
			</section>
		</div>
	);
};

export default VideoForm;
