import FileComponent from "@/src/components/FileComponent";
import React from "react";
import AddButton from "../AddButton";

interface Props {
  user: any;
  currentSubject: any;
}

const FilePage = ({ currentSubject, user }: Props) => {
  console.log(currentSubject);
  if (currentSubject?.files.length == 0) {
    return (
      <div className="w-full h-screen flex-grow flex flex-col justify-center items-center">
        <h2 className="text-5xl font-bold -mt-40">{currentSubject?.name}</h2>
        <div className="flex flex-col items-center">
          <p className="black:text-white text-center text-4xl font-extrabold p-4 max-md:text-xl opacity-70">
            No Files Here Yet 😓 <br /> Why Don't You Add One?! 😏
          </p>
          <AddButton subjectId={currentSubject.id} user={user} type="File" />
        </div>
      </div>
    );
  }
  return (
    <div className="flex-grow flex mt-10 flex-col gap-9 items-center ">
      <h2 className="text-5xl font-bold">{currentSubject?.name}</h2>
      <AddButton subjectId={currentSubject.id} user={user} type="File" />
      <div className="grid p-10 grid-cols-4 max-[1700px]:grid-cols-3 max-[1100px]:grid-cols-2 max-[780px]:grid-cols-1 gap-4">
        {currentSubject?.files.map((file: any, index: any) => {
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
