import React from "react";
import EditForm from "@/src/components/forms/EditForm";
import { getVideoById } from "@/src/lib/db/videos/getVideoById";
import { getFileById } from "@/src/lib/db/files/getFileById";
import { getLinkById } from "@/src/lib/db/link/getLinkById";
import { getUserByEmail } from "@/src/lib/db/user/getUser";
import NotFound from "@/src/components/NotFound";
import { getServerSession } from "next-auth";

const Page = async ({
  params,
}: {
  params: { type: string; typeId: string };
}) => {
  const session = await getServerSession();
  const user = await getUserByEmail(session?.user?.email);

  let item;
  let type;

  switch (params.type) {
    case "video":
      item = await getVideoById(Number(params.typeId));
      type = "Video";
      break;
    case "file":
      item = await getFileById(Number(params.typeId));
      type = "File";
      break;
    case "link":
      item = await getLinkById(Number(params.typeId));
      type = "Link";
      break;
    default:
      return <div>Invalid type</div>;
  }

  if (item && user?.role === "SUPERADMIN") {
    const initialValues = {
      url: item.url,
      title: item.title,
      description: item.description,
    };

    return (
      <div className="mt-28 flex flex-col items-center">
        <h1 className="text-4xl underline font-bold">Edit {type}</h1>
        <EditForm
          type={type}
          id={params.typeId}
          initialValues={initialValues}
        />
      </div>
    );
  } else {
    return <NotFound />;
  }
};

export default Page;
