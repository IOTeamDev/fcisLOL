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
import LinkPage from "./pages/LinkPage";

interface Props {
	pendingVideos: any;
	pendingFiles: any;
	pendingLinks: any;
}

const PageSwitcher = ({ pendingVideos, pendingFiles, pendingLinks }: Props) => {
	return (
		<Tabs defaultValue="videos">
			<div className="flex items-center justify-center w-screen my-2">
				<TabsList>
					<TabsTrigger value="videos">Videos</TabsTrigger>
					<TabsTrigger value="files">Files</TabsTrigger>
					<TabsTrigger value="links">Links</TabsTrigger>
				</TabsList>
			</div>
			<TabsContent value="videos">
				<VideoPage pendingVideos={pendingVideos} />
			</TabsContent>
			<TabsContent value="files">
				<FilePage pendingFiles={pendingFiles} />
			</TabsContent>
			<TabsContent value="links">
				<LinkPage pendingLinks={pendingLinks} />
			</TabsContent>
		</Tabs>
	);
};

export default PageSwitcher;
