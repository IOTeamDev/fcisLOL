import { redirect } from "next/navigation";

function page() {
  redirect("/admin/pending");
}

export default page;
