"use client";
import { Button } from "@/src/components/ui/button";
import { Card } from "@/src/components/ui/card";
import { updateVideo } from "@/src/lib/db/videos/updateVideo";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const videoApprovalForm = ({ targetVideo }: { targetVideo: any }) => {
	const router = useRouter();

	const handleClick = (decision: string) => {
		try {
			switch (decision) {
				case "approve":
					updateVideo(targetVideo.id, { status: "APPROVED" });
					toast.success("Video Approved Successfully!");
					setTimeout(() => {
						router.push("/admin/pending");
						router.refresh();
					}, 1000);
					break;
				case "reject":
					updateVideo(targetVideo.id, { status: "REJECTED" });
					toast.success("Video Rejected Successfully!");
					setTimeout(() => {
						router.push("/admin/pending");
						router.refresh();
					}, 1000);
					break;
				default:
					break;
			}
		} catch (error) {
			toast.error("An error occurred. Please try again.");
		}
	};
	return (
		<div className="flex flex-col justify-between space-y-2 px-4">
			<div className="pb-6 text-center ">
				<h1 className="text-4xl">{targetVideo?.title}</h1>
			</div>
			<div className="flex max-[1100px]:flex-col justify-around">
				{/* Image */}
				<img
					alt="Thumbnail"
					className="rounded-xl w-1/2 max-[1100px]:w-full"
					height={169}
					src={targetVideo?.thumbnail ?? "/thumbnail.webp"}
					style={{
						aspectRatio: "300/169",
						objectFit: "cover",
					}}
					width={300}
				/>
				<div className="flex flex-col items-center w-1/2 max-[1100px]:w-full p-4">
					<div className="h-4/5 flex flex-col items-center justify-between">
						{/* Details */}
						<Card className="w-full m-2">
							<Link href={targetVideo?.url} target="_blank">
								<p className="p-4 m-1">{targetVideo?.url}</p>
							</Link>
						</Card>
						{targetVideo?.description ? (
							<Card className="w-full m-2">
								<p className="p-4 m-1">{targetVideo?.description}</p>
							</Card>
						) : null}

						{/* Buttons */}
						<p className="cursor-pointer underline m-4">edit?</p>
						<div className="w-full flex justify-around m-4">
							<Button
								className="w-1/2 mx-2"
								variant={"default"}
								onClick={() => handleClick("approve")}
							>
								Approve
							</Button>
							<Button
								className="w-1/2 mx-2"
								variant={"destructive"}
								onClick={() => handleClick("reject")}
							>
								Reject
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default videoApprovalForm;
