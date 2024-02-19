import { getAllPending } from "@/src/lib/db/videos/getAllPending";

const page = async () => {
  const pendingVideos = await getAllPending();
  console.log(pendingVideos);
  return <div>page</div>;
};

export default page;
