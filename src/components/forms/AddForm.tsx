"use client";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { useForm } from "react-hook-form";

interface Props {
	handleFormSubmit: any;
	type: "Video" | "File" | "Link";
}

const AddForm = ({ handleFormSubmit, type }: Props) => {
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
					placeholder={`${type === "Video" ? "Youtube" : ""} ${type} URL`}
					{...register("url")}
					required
				/>
			</div>
			<div className="space-y-2">
				<Input
					id="title"
					placeholder={`${type} Title`}
					type="text"
					{...register("title")}
					required
				/>
			</div>
			<div className="space-y-2">
				<Input
					id="description"
					placeholder={`Enter ${type} Description (Optional)`}
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

export default AddForm;
