import React from "react";
import AddVideoButton from "../AddVideoButton";
import VideoComponent from "@/src/components/VideoComponent";
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
          <AddVideoButton subjectId={currentSubject.id} user={user} />
        </div>
      </div>
    );
  }
  return (
    <div className="flex-grow flex mt-10 flex-col gap-9 items-center ">
      <h2 className="text-5xl font-bold">{currentSubject?.name}</h2>
      <AddVideoButton subjectId={currentSubject.id} user={user} />
      <div className="grid p-10 grid-cols-4 max-[1700px]:grid-cols-3 max-[1100px]:grid-cols-2 max-[780px]:grid-cols-1 gap-4">
        {currentSubject?.videos.map((video: any, index: any) => {
          video.subject = currentSubject;
          return (
            <div key={index}>
              <VideoComponent video={video} target={`/video/${video.id}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default videoPage;
