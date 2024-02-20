import { redirect } from "next/navigation";

const page = async () => {
  return redirect("/admin/pending");
};

export default page;
