import { redirect } from "next/navigation";
import React from "react";
import AddVideoButton from "./AddVideoButton";

interface Props {
	currentSubject: any;
	user: any;
}

const NoVideosPage = ({ currentSubject, user }: Props) => {
	let handleAdd = () => {};
	if (!user) {
		handleAdd = () => {
			redirect("/login");
		};
	}
	return (
		<div className="w-full flex-grow flex flex-col justify-center items-center">
			<h2 className="text-5xl font-bold">{currentSubject?.name}</h2>

			<div className="flex flex-col items-center">
				<p className="black:text-white text-center text-4xl font-extrabold p-4 max-md:text-xl opacity-70">
					No Videos Here Yet 😓 <br /> Why Don't You Add One?! 😏
				</p>
				<AddVideoButton subjectIdj={currentSubject.id} user={user} />
			</div>
		</div>
	);
};

export default NoVideosPage;
