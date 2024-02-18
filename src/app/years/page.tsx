import React from "react";
import TheCard from "@/src/components/theCard";
import LinkCard from "@/src/components/LinkCard";

const Page = () => {
  return (
    <div className="min-w-sreen h-screen flex justify-center items-center">
      <div className="grid grid-cols-2 gap-4 max-[1100px]:grid-cols-1">
        <LinkCard
          className="w-[500px] max-[550px]:w-[400px] max-[500px]:w-[300px]"
          href="/years/1st"
        >
          Level 1
        </LinkCard>
        <TheCard>🔒 Level 2</TheCard>
        <TheCard>🔒 Level 3</TheCard>
        <TheCard>🔒 Level 4</TheCard>
      </div>
    </div>
  );
};

export default Page;
