import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="min-w-sreen h-screen flex justify-center items-center bg-black ">
      <div className="grid grid-cols-2 max-md:grid-cols-1  gap-5 ">
        <Link
          href="/years/first-year/1"
          className="min-h-[300px] flex justify-center items-center min-w-[300px] broder border-2 border-white text-white"
        >
          <p>first semester </p>
        </Link>
        <Link
          href="/years/first-year/2"
          className="min-h-[300px] flex justify-center items-center min-w-[300px] broder border-2 border-white text-white"
        >
          <p>second semester </p>
        </Link>
      </div>
    </div>
  );
};

export default page;
