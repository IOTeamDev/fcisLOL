import NotFound from "@/src/components/NotFound";
import AvatarIcon from "@/src/components/ui/avatarIcon";
import { Button } from "@/src/components/ui/button";
import { Card } from "@/src/components/ui/card";
import { getLinkById } from "@/src/lib/db/link/getLinkById";
import { getUserById } from "@/src/lib/db/user/getUser";
import Link from "next/link";

const page = async ({ params }: { params: { linkId: string } }) => {
  const link = await getLinkById(Number(params.linkId));

  if (link && link.status === "APPROVED") {
    const user = await getUserById(link?.userId);
    return (
      <div className="w-full flex flex-col justify-center items-center p-8">
        <div className="flex items-center p-8">
          <p>Added by:&nbsp;</p>
          <AvatarIcon width="32" height="32" />
          &nbsp;
          <Link
            href={`/profile/${link.userId}`}
            className="text-lg max-[1000px]:text-sm max-[500px]:text-xs underline"
          >
            {user?.firstName} {user?.lastName}
          </Link>
        </div>
        <h1 className="text-4xl max-[1000px]:text-2xl max-[500px]:text-xl font-bold pb-4 text-center">
          {link?.title}
        </h1>
        <div className="w-full flex max-[700px]:flex-col justify-around items-center pb-12">
          {link.description ? (
            <p className="text-lg max-[1000px]:text-sm max-[500px]:text-xs opacity-65 pb-8">
              {link.description}
            </p>
          ) : null}
        </div>
        <div className="flex flex-col items-center">
          <Card className="p-4 my-4">Link: {link.url}</Card>

          <Link href={link.url} className="underline">
            <Button>Visit link</Button>
          </Link>
        </div>
      </div>
    );
  } else {
    return <NotFound />;
  }
};

export default page;
