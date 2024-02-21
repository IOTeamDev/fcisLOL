"use client";
import { Label } from "@/src/components/ui/label";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { useForm } from "react-hook-form";

export default function EditVideoForm({
	handleEditVideo,
	video,
}: {
	video: any;
	handleEditVideo: any;
}) {
	const { register, handleSubmit } = useForm();

	return (
		<form
			onSubmit={handleSubmit((data: any) => handleEditVideo(data))}
			className="flex mt-4 flex-col gap-10"
		>
			<div className="space-y-2">
				<Label htmlFor="name">Updated Video URL</Label>
				<Input
					defaultValue={video.url}
					id="url"
					type="url"
					placeholder="Enter the right URL for the video"
					{...register("url")}
				/>
			</div>
			<div className="space-y-2">
				<Label htmlFor="title">Updated Video Title</Label>
				<Input
					defaultValue={video.title}
					id="title"
					placeholder="Enter a better title for this video"
					type="text"
					{...register("title")}
				/>
			</div>
			<Button type="submit"> Edit</Button>
		</form>
	);
}
