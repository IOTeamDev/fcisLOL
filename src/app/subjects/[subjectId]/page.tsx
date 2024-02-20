import { getSubjectById } from "@/src/lib/db/subjects/getSubjectById";
import { getUserByEmail } from "@/src/lib/db/user/getUser";
import { getServerSession } from "next-auth";
import React from "react";
import NotFound from "@/src/components/NotFound";
import PageSwitcher from "./PageSwitcher";

const page = async ({ params }: { params: { subjectId: string } }) => {
	try {
		const currentSubject = await getSubjectById(Number(params.subjectId));
		if (!currentSubject) {
			throw new Error();
		}
		let user;
		const session = await getServerSession();
		if (session) {
			user = await getUserByEmail(session?.user?.email);
		}
		return <PageSwitcher user={user} currentSubject={currentSubject} />;
	} catch (error) {
		return <NotFound />;
	}
};

export default page;
