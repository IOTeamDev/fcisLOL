"use client";
import { Label } from "@/src/components/ui/label";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { useForm } from "react-hook-form";

export default function EditFileForm({
	handleEditFile,
	file,
}: {
	file: any;
	handleEditFile: any;
}) {
	const { register, handleSubmit } = useForm();

	return (
		<form
			onSubmit={handleSubmit((data: any) => handleEditFile(data))}
			className="flex mt-4 flex-col gap-10"
		>
			<div className="space-y-2">
				<Label htmlFor="name">Url</Label>
				<Input
					defaultValue={file.url}
					id="url"
					type="url"
					placeholder="Enter the right URL for the file"
					{...register("url")}
				/>
			</div>
			<div className="space-y-2">
				<Label htmlFor="title">Title</Label>
				<Input
					defaultValue={file.title}
					id="title"
					placeholder="Enter a better title for this file"
					type="text"
					{...register("title")}
				/>
			</div>
			<Button type="submit">Edit</Button>
		</form>
	);
}
