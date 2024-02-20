"use client";
import React, { useState } from "react";
import VideoPage from "./pages/VideoPage";
import FilePage from "./pages/FilePage";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/src/components/ui/tabs";

interface Props {
	user: any;
	currentSubject: any;
}

const PageSwitcher = ({ user, currentSubject }: Props) => {
	return (
		<Tabs defaultValue="videos">
			<div className="flex items-center justify-center w-screen my-2">
				<TabsList>
					<TabsTrigger value="videos">Videos</TabsTrigger>
					<TabsTrigger value="files">Files</TabsTrigger>
				</TabsList>
			</div>
			<TabsContent value="videos">
				<VideoPage user={user} currentSubject={currentSubject} />
			</TabsContent>
			<TabsContent value="files">
				<FilePage />
			</TabsContent>
		</Tabs>
	);
};

export default PageSwitcher;
