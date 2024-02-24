"use client";
import FileComponent from "@/src/components/FileComponent";
import AddButton from "../AddButton";
import { useState } from "react";
import { Input } from "@/src/components/ui/input";
import Fuse from "fuse.js";

interface Props {
	user: any;
	currentSubject: any;
}

const FilePage = ({ currentSubject, user }: Props) => {

  const [queryText, setQueryText] = useState("");
	if (currentSubject?.files.length == 0) {
		return (
			<div className="w-full h-screen flex-grow flex flex-col justify-center items-center">
				<h2 className="text-5xl font-bold -mt-40">{currentSubject?.name}</h2>
				<div className="flex flex-col items-center">
					<p className="black:text-white text-center text-4xl font-extrabold p-4 max-md:text-xl opacity-70">
						No Files Here Yet 😓 <br /> Why Don&apos;t You Add One?! 😏
					</p>
					<AddButton subjectId={currentSubject.id} user={user} type="File" />
				</div>
			</div>
		);
	}

	const fuse = new Fuse(currentSubject.files, {
		keys: ["title", "description"],
	});

	const searchResults = fuse.search(queryText);
	const FinalResultsData = queryText
		? searchResults.map((result) => result.item)
		: currentSubject.files;

	const handleChange = (e: any) => {
		setQueryText(e.target.value);
	};

	return (
		<div className="flex-grow flex mt-10 flex-col gap-9 items-center ">
			<h2 className="text-5xl font-bold">{currentSubject?.name}</h2>
			{/* SEARCH BAR */}
			<div className="p-2 flex flex-col border-gray-500 border-2 rounded-xl">
				<form className="flex w-full max-w-sm items-center space-x-2">
					<Input
						className="flex-1"
						placeholder="Search..."
						type="search"
						value={queryText}
						onChange={handleChange}
					/>
				</form>
			</div>
			{/* END SEARCH BAR */}
			<AddButton subjectId={currentSubject.id} user={user} type="File" />
			<div className="grid p-10 grid-cols-4 max-[1700px]:grid-cols-3 max-[1100px]:grid-cols-2 max-[780px]:grid-cols-1 gap-4">
				{FinalResultsData.sort(
					(a: any, b: any) => b.updatedAt - a.updatedAt
				).map((file: any, index: any) => {
					file.subject = currentSubject;
					return (
						<div key={index}>
							<FileComponent file={file} target={`/files/${file.id}`} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default FilePage;
