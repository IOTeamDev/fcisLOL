import LinkCard from "@/src/components/LinkCard";
import NotFound from "@/src/components/NotFound";
import { getLevelSemesters } from "@/src/lib/db/videos/getLevelSemesters";

const page = async ({ params }: { params: { level: string } }) => {
  const accessableLevels = [1, 2, 3, 4];
  if (!accessableLevels.includes(Number(params.level))) {
    return <NotFound />;
  }
  const levelSemesters = await getLevelSemesters(Number(params.level));

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold m-20">Level {params.level[0]}!</h1>
      <div className="min-w-sreen flex-grow flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 gap-4">
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
