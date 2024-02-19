import NotFound from "@/src/components/NotFound";
import { getServerSession } from "next-auth";
import React from "react";

const page = async () => {
	const session = await getServerSession();
	if (!session?.user) {
		return <NotFound />;
	}
	return <div className="px-40 py-20">page</div>;
};

export default page;
