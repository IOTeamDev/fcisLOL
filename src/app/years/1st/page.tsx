import LinkCard from "@/src/components/LinkCard";
import React from "react";

const page = () => {
  return (
    <div className="min-w-sreen h-screen flex justify-center items-center   ">
      <div className="grid grid-cols-1 gap-4">
        <LinkCard
          href="/years/1st-year/1"
          className="w-[500px] max-[550px]:w-[400px] max-[500px]:w-[300px]"
        >
          <p>1st Semester </p>
        </LinkCard>
        <LinkCard
          href="/years/1st-year/2"
          className="w-[500px] max-[550px]:w-[400px] max-[500px]:w-[300px]"
        >
          <p>2nd Semester </p>
        </LinkCard>
      </div>
    </div>
  );
};

export default page;
