"use client";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { useForm } from "react-hook-form";

interface Props {
	handleFormSubmit: any;
}

const VideoForm = ({ handleFormSubmit }: Props) => {
	const { register, handleSubmit } = useForm();

	return (
		<form
			onSubmit={handleSubmit((data: any) => handleFormSubmit(data))}
			className=" flex flex-col mt-4 gap-10"
		>
			<div className="space-y-2">
				<Input
					id="url"
					type="url"
					placeholder="Youtube Video URL"
					{...register("url")}
					required
				/>
			</div>
			<div className="space-y-2">
				<Input
					id="title"
					placeholder="Video Title"
					type="text"
					{...register("title")}
					required
				/>
			</div>
			<div className="space-y-2">
				<Input
					id="description"
					placeholder="Enter Video Description (Optional)"
					type="text"
					{...register("description")}
				/>
			</div>
			<Button type="submit" className="w-[70px]">
				Add
			</Button>
		</form>
	);
};

export default VideoForm;
