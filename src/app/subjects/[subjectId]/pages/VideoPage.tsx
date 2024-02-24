"use client";
import AddButton from "../AddButton";
import VideoComponent from "@/src/components/VideoComponent";
import { useState } from "react";
import { Input } from "@/src/components/ui/input";
import Fuse from "fuse.js";

interface Props {
  user: any;
  currentSubject: any;
}

const videoPage = ({ currentSubject, user }: Props) => {
  if (currentSubject?.videos.length == 0) {
    return (
      <div className="w-full h-screen flex-grow flex flex-col justify-center items-center">
        <h2 className="text-5xl font-bold -mt-40">{currentSubject?.name}</h2>
        <div className="flex flex-col items-center">
          <p className="black:text-white text-center text-4xl font-extrabold p-4 max-md:text-xl opacity-70">
            No Videos Here Yet 😓 <br /> Why Don't You Add One?! 😏
          </p>
          <AddButton subjectId={currentSubject.id} user={user} type="Video" />
        </div>
      </div>
    );
  }

  const [queryText, setQueryText] = useState("");

  const fuse = new Fuse(currentSubject.videos, {
    keys: ["title", "description"],
  });

  const searchResults = fuse.search(queryText);
  const FinalResultsData = queryText
    ? searchResults.map((result) => result.item)
    : currentSubject.videos;

  const handleChange = (e: any) => {
    setQueryText(e.target.value);
  };

  return (
    <div className="flex-grow flex mt-10 flex-col gap-9 items-center ">
      <h2 className="text-5xl font-bold">{currentSubject?.name}</h2>
      {/* SEARCH BAR */}
      <div className="p-2 flex flex-col border-4 border-stone-500 border-opacity-35 rounded-xl">
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
      <AddButton subjectId={currentSubject.id} user={user} type="Video" />
      <div className="grid p-10 grid-cols-4 max-[1700px]:grid-cols-3 max-[1100px]:grid-cols-2 max-[780px]:grid-cols-1 gap-4">
        {FinalResultsData.sort(
          (a: any, b: any) => b.updatedAt - a.updatedAt
        ).map((video: any, index: any) => {
          video.subject = currentSubject;
          return (
            <div key={index}>
              <VideoComponent video={video} target={`/videos/${video.id}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default videoPage;
