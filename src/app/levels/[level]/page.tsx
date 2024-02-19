import LinkCard from "@/src/components/LinkCard";
import { getSemestersOfLevel } from "@/src/lib/db/videos/getSemestersOfLevel";

const page = async ({ params }: { params: { level: string } }) => {
  const levelSemesters = await getSemestersOfLevel(parseInt(params.level[0]));

  return (
    <div className="min-w-sreen flex-grow flex justify-center items-center   ">
      <div className="grid grid-cols-1 gap-4">
        {levelSemesters.map((semester) => (
          <LinkCard
            href={`/semesters/${semester.id}`}
            className="w-[500px] max-[550px]:w-[400px] max-[500px]:w-[300px]"
          >
            <p>{semester.name}</p>
          </LinkCard>
        ))}
      </div>
    </div>
  );
};

export default page;
