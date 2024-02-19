import LinkCard from "@/src/components/LinkCard";
import NotFound from "@/src/components/NotFound";
import { getUserByEmail } from "@/src/lib/db/user/getUser";
import { getVideos } from "@/src/lib/db/videos/getVideos";
import { getServerSession } from "next-auth";

const page = async () => {
  const session = await getServerSession();
  const user = await getUserByEmail(session?.user?.email);
  if (user?.role === "USER") return <NotFound />;

  const pendingVideos = await getVideos("PENDING");
  return (
    <div className="min-w-sreen flex-grow flex justify-center items-center p-4">
      <div className="grid grid-cols-3 max-[550px]:grid-cols-1 gap-4 max-[550px]:gap-4">
        {pendingVideos.map((video) => (
          <LinkCard
            key={video.id}
            href={`/admin/pending/${video.id}`}
            className="w-[200px] max-[550px]:w-[400px] max-[500px]:w-[300px]"
          >
            <p>{video.title}</p>
          </LinkCard>
        ))}
      </div>
    </div>
  );
};

export default page;
