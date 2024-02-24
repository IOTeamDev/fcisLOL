import LinkCard from "@/src/components/LinkCard";
import NotFound from "@/src/components/NotFound";
import { getSemesterSubjects } from "@/src/lib/db/subjects/getSemesterSubjects";
import React from "react";

const page = async ({ params }: { params: { semesterId: string } }) => {
  let currentSemesterSubject: any[] = [];
  // check if current semester is in the database and  has subjects
  try {
    currentSemesterSubject = await getSemesterSubjects(
      Number(params.semesterId)
    );
    if (currentSemesterSubject.length == 0) throw new Error();
  } catch (err) {
    return <NotFound />;
  }
  return (
    <div className="flex flex-col justify-center items-center p-10">
      <h1 className="text-5xl max-[600px]:text-3xl font-bold mt-8 text-center">
        Semester {params.semesterId} Subjects
      </h1>

      <div className="grid grid-cols-4 max-xl:grid-cols-2 max-md:grid-cols-1 gap-5 mt-20">
        {currentSemesterSubject.map((subject, index) => (
          <div key={index} className="hover:scale-105">
            <LinkCard href={`/subjects/${subject.id}`}>
              <p className="text-center">{subject.name}</p>
            </LinkCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
