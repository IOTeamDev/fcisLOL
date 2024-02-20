import React from "react";
import { getServerSession } from "next-auth";
import { getUserByEmail } from "@/src/lib/db/user/getUser";
import NotFound from "@/src/components/NotFound";

async function layout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession();
  const user = await getUserByEmail(session?.user?.email);

  if (user?.role === "USER" || !user) {
    return <NotFound />;
  }
  return <div>{children}</div>;
}

export default layout;
