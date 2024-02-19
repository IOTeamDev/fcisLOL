import LinkCard from "@/src/components/LinkCard";
import { getLevelSemesters } from "@/src/lib/db/videos/getLevelSemesters";

const page = async ({ params }: { params: { level: string } }) => {
  const levelSemesters = await getLevelSemesters(parseInt(params.level[0]));

	return (
		<div className="min-w-sreen flex-grow flex justify-center items-center   ">
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
	);
};

export default page;
