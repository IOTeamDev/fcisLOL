import React from "react";
import Image from "next/image";

const Landing = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        <section className="p-10 w-full flex justify-between items-center max-[900px]:flex-col-reverse">
          <div>
            <h1 className="text-7xl max-[900px]:text-5xl font-bold py-2 max-[900px]:py-4 max-[900px]:text-center max-[500px]:text-4xl">
              All in One PLace!
            </h1>
            <p className="text-4xl max-[900px]:text-3xl max-[500px]:text-2xl font-bold max-[900px]:text-center">
              Videos 🎬, Notes 📝, Recordings 📹, Exams 🖊... and more
            </p>
          </div>
          <Image
            src="/searchblack.svg"
            alt="We Got You!"
            className="w-[600px] h-[500px] aspect-square rounded-xl object-cover object-center"
            width={700}
            height={600}
          />
        </section>
      </div>
      {/**=============================**/}
      <div className="relative w-full h-screen flex flex-col justify-center items-center">
        <section className="p-10 w-full flex justify-between items-center max-[900px]:flex-col">
          <Image
            src="/book.svg"
            alt="We Got You!"
            className="w-[600px] h-[500px] aspect-square overflow-hidden rounded-xl object-cover object-center max-[900px]:-mt-10"
            width={700}
            height={600}
          />
          <div className="sm:ml-10 sm:w-1/2">
            <h1 className="text-7xl max-[900px]:text-5xl font-bold py-2 max-[900px]:py-4 max-[900px]:text-center max-[500px]:text-4xl">
              Well Organized
            </h1>
            <p className="text-4xl font-bold max-[900px]:text-center max-[900px]:text-3xl max-[500px]:text-2xl">
              Get Access to all Materials 📚 by Years, Semesters and even
              Subjects!
            </p>
          </div>
        </section>
      </div>
      {/**=============================**/}
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <section className="p-10 w-full flex justify-between items-center max-[900px]:flex-col-reverse">
          <div>
            <h1 className="text-7xl max-[900px]:text-5xl font-bold py-2 max-[900px]:py-4 max-[900px]:text-center max-[500px]:text-4xl">
              Add Your Own!
            </h1>
            <p className="text-4xl max-[900px]:text-3xl max-[500px]:text-2xl font-bold max-[900px]:text-center">
              Upload your own resources and spread knowledge with the community!
              📤
            </p>
          </div>
          <Image
            src="/Education-rafiki.svg"
            alt="We Got You!"
            className="w-[700px] h-[500px] aspect-square overflow-hidden rounded-xl object-cover object-center max-[900px]:-mt-10 max-[500px]:w-[600px] max-[500px]:h-[400px]"
            width={700}
            height={600}
          />
        </section>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <a
            href="/levels"
            className="flex justify-center border-[#020817] border-2 p-2 px-10 rounded-xl bg-[#020817] text-white font-bold dark:hover:bg-[#232425] dark:hover:text-white transition duration-300 hover:bg-white hover:text-[#020817] hover:border-[#020817] dark:bg-white dark:text-[#020817] dark:hover:border-white"
          >
            Start Your Journey Now!
          </a>
        </div>
      </div>
    </>
  );
};

export default Landing;
