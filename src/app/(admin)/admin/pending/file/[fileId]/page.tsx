import { Card } from "@/src/components/ui/card";
import React from "react";
import NotFound from "@/src/components/NotFound";
import { getSubjectById } from "@/src/lib/db/subjects/getSubjectById";
import { getFileById } from "@/src/lib/db/files/getFileById";
import FileApprovalForm from "./FileApprovalForm";

const page = async ({ params }: { params: { fileId: string } }) => {
  const targetFile = await getFileById(Number(params.fileId));
  const targetSubject = await getSubjectById(targetFile?.subjectId);

  if (targetFile?.status !== "PENDING") {
    return <NotFound />;
  }

  return (
    <div className="w-screen px-4 flex-grow flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mt-8 underline">File Approval</h1>
      <Card className="m-10">
        <div className="max-h-fit rounded-md p-5 m-3 flex flex-col justify-center items-center">
          <FileApprovalForm
            targetFile={targetFile}
            targetSubject={targetSubject}
          />
        </div>
      </Card>
    </div>
  );
};

export default page;
