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
  user: any;
  currentSubject: any;
}

const PageSwitcher = ({ user, currentSubject }: Props) => {
  return (
    <Tabs defaultValue="videos">
      <div className="flex flex-col items-center justify-center w-screen my-2">
        <TabsList className="border-[#020817] dark:border-white border-2">
          <TabsTrigger value="videos">Videos</TabsTrigger>
          <TabsTrigger value="files">Files</TabsTrigger>
          <TabsTrigger value="links">Links</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="videos">
        <VideoPage user={user} currentSubject={currentSubject} />
      </TabsContent>
      <TabsContent value="files">
        <FilePage user={user} currentSubject={currentSubject} />
      </TabsContent>
      <TabsContent value="links">
        <LinkPage user={user} currentSubject={currentSubject} />
      </TabsContent>
    </Tabs>
  );
};

export default PageSwitcher;
