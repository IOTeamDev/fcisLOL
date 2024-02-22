import LinkCard from "@/src/components/LinkCard";
import { getLevelSemesters } from "@/src/lib/db/videos/getLevelSemesters";

const page = async ({ params }: { params: { level: string } }) => {
  const levelSemesters = await getLevelSemesters(parseInt(params.level[0]));

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold mt-20">{params.level} Level!</h1>

      <div className="min-w-sreen h-screen flex-grow flex flex-col justify-center items-center -mt-20">
        <div className="grid grid-cols-1 gap-4 -mt-40">
          {levelSemesters.map((semester, index) => (
            <LinkCard
              key={index}
              href={`/semesters/${semester.id}`}
              className="w-[500px] max-[550px]:w-[400px] max-[500px]:w-[300px]"
            >
              <p>{semester.name}</p>
            </LinkCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
