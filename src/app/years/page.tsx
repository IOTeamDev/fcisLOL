import React from "react";
import TheCard from "@/src/components/theCard";
import LinkCard from "@/src/components/LinkCard";

const Page = () => {
  return (
    <div className="min-w-sreen h-screen flex justify-center items-center">
      <div className="grid grid-cols-4 max-xl:grid-cols-2 max-md:grid-cols-1  gap-5 ">
        <LinkCard href="/years/1st-year">Level 1</LinkCard>
        <TheCard>Level 2</TheCard>
        <TheCard>Level 3</TheCard>
        <TheCard>Level 4</TheCard>
      </div>
    </div>
  );
};

export default Page;
