import LinkCard from "@/src/components/LinkCard";
import { getSemestersOfLevel } from "@/src/lib/db/videos/getSemestersOfLevel";
// make hashmap

const page = async () => {
  const levelSemesters = await getSemestersOfLevel(1);
  console.log(levelSemesters);
  return (
    <div className="min-w-sreen flex-grow flex justify-center items-center   ">
      <div className="grid grid-cols-1 gap-4">
        <LinkCard
          href="/semesters/1"
          className="w-[500px] max-[550px]:w-[400px] max-[500px]:w-[300px]"
        >
          <p>1st Semester </p>
        </LinkCard>
        <LinkCard
          href="/semesters/2"
          className="w-[500px] max-[550px]:w-[400px] max-[500px]:w-[300px]"
        >
          <p>2nd Semester </p>
        </LinkCard>
      </div>
    </div>
  );
};

export default page;
