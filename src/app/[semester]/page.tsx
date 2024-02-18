import LinkCard from "@/src/components/LinkCard";
import NotFound from "@/src/components/NotFound";
import { getSemesterSubjects } from "@/src/lib/db/subjects/getSemesterSubjects";
import React from "react";

const page = async ({ params }: { params: { semester: string } }) => {
  let currentSemesterSubject: any[] = [];
  // check if current semester is in the database and  has subjects
  try {
    currentSemesterSubject = await getSemesterSubjects(Number(params.semester));
    if (currentSemesterSubject.length == 0) throw new Error();
  } catch (err) {
    return (
      <NotFound />
    );
  }
  return (
    <div className="min-w-sreen min-h-screen flex justify-center items-center  p-3 ">
      <div className="grid grid-cols-4 max-xl:grid-cols-2 max-md:grid-cols-1  gap-5 ">
        {currentSemesterSubject.map((subject, index) => (
          <>
            <LinkCard key={index} href={`${params.semester}/${subject.id}`}>
              <p>{subject.name}</p>
            </LinkCard>
          </>
        ))}
      </div>
    </div>
  );
};

export default page;
