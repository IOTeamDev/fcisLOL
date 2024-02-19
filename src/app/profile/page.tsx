import { Input } from "@/components/ui/input";
import AccountSettings from "@/src/components/AccountSettings";
import NotFound from "@/src/components/NotFound";
import ProfilePage from "@/src/components/ProfilePage";
import { getUserByEmail } from "@/src/lib/db/user/getUser";
import { getServerSession } from "next-auth";
import React from "react";

const page = async () => {
	const session = await getServerSession();
	if (!session?.user) {
		return <NotFound />;
	}
	const user = await getUserByEmail(session.user.email);
	return (
		<div className="flex-grow flex justify-center items-center">
			<ProfilePage />
		</div>
	);
};

export default page;
