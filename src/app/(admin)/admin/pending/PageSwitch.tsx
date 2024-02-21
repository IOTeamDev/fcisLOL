"use client";
import React from "react";
import VideoPage from "./pages/VideoPage";
import FilePage from "./pages/FilePage";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/src/components/ui/tabs";

interface Props {
	pendingVideos: any;
	pendingFiles: any;
}

const PageSwitcher = ({ pendingVideos, pendingFiles }: Props) => {
	return (
		<Tabs defaultValue="videos">
			<div className="flex items-center justify-center w-screen my-2">
				<TabsList>
					<TabsTrigger value="videos">Videos</TabsTrigger>
					<TabsTrigger value="files">Files</TabsTrigger>
				</TabsList>
			</div>
			<TabsContent value="videos">
				<VideoPage pendingVideos={pendingVideos} />
			</TabsContent>
			<TabsContent value="files">
				<FilePage pendingFiles={pendingFiles} />
			</TabsContent>
		</Tabs>
	);
};

export default PageSwitcher;
