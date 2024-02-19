import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { getUserByEmail } from "@/src/lib/db/user/getUser";
import NotFound from "@/src/components/NotFound";

const page = async () => {
  const session = await getServerSession();
  const user = await getUserByEmail(session?.user?.email);
  if (user?.role === "USER") return <NotFound />;
  return redirect("/admin/pending");
};

export default page;
