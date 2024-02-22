import React from "react";
import FileComponent from "@/src/components/FileComponent";

const FilePage = ({ pendingFiles }: { pendingFiles: any }) => {
  if (pendingFiles.length === 0) {
    return (
      <div className="h-screen flex-grow flex justify-center items-center">
        <h1 className="text-5xl font-bold -mt-40 max-[600px]:text-3xl">No Pending Files</h1>
      </div>
    );
  }
  return (
    <div className="flex-grow flex mt-10 flex-col gap-9 items-center">
      <h2 className="text-5xl font-bold">Pending Files</h2>
      <div className="grid p-10 grid-cols-4 max-[1700px]:grid-cols-3 max-[1100px]:grid-cols-2 max-[780px]:grid-cols-1 gap-4">
        {pendingFiles.map((file: any, index: any) => {
          return (
            <div key={index}>
              <FileComponent
                file={file}
                target={`/admin/pending/file/${file.id}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilePage;
