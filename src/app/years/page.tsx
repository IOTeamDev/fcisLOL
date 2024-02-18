import React from "react";
import Card from "@/src/components/Card";
import LinkCard from "@/src/components/LinkCard";

const page = () => {
  return (
    <div className="min-w-sreen h-screen flex justify-center items-center   ">
      <div className="grid grid-cols-4 max-xl:grid-cols-2 max-md:grid-cols-1  gap-5 ">
        <LinkCard href="/years/1st-year">
          <h1 className="font-bold text-2xl">1st grade</h1>
        </LinkCard>
        <Card> </Card>
        <Card> </Card>
        <Card> </Card>
      </div>
    </div>
  );
};

export default page;
