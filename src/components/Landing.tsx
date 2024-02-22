import React from "react";
import Image from "next/image";

const Landing = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <section className="p-10 w-full h-4/5 flex justify-between items-center max-[900px]:flex-col-reverse">
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
      <div className="w-full h-screen flex flex-col justify-center items-center ">
        <section className="p-10 w-full h-4/5 flex justify-center items-center max-[900px]:flex-col">
          <Image
            src="/organization.svg"
            alt="We Got You!"
            className="w-[600px] h-[500px] aspect-square overflow-hidden rounded-xl object-cover object-center max-[900px]:-mt-10"
            width={700}
            height={600}
          />
          <div className="sm:ml-10 sm:w-1/">
            <h1 className="sm:text-7xl text-5xl font-bold py-2 max-[900px]:py-4 max-[900px]:text-center max-[500px]:text-4xl">
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
        <section className="p-10 w-full h-4/5 flex justify-start items-center max-[900px]:flex-col-reverse">
          <div>
            <h1 className="text-7xl max-[900px]:text-5xl font-bold py-2 max-[900px]:py-4 max-[900px]:text-center max-[500px]:text-4xl">
              Add Your Own!
            </h1>
            <p className="text-4xl max-[900px]:text-3xl max-[500px]:text-2xl font-bold max-[900px]:text-center">
              Contribute your own resources and spread knowledge with the
              community! 📤
            </p>
          </div>
          <Image
            src="/uploud.svg"
            alt="We Got You!"
            className="w-[600px] h-[500px] aspect-square overflow-hidden rounded-xl object-cover object-center max-[900px]:-mt-10"
            width={600}
            height={500}
          />
        </section>
      </div>
    </>
  );
};

export default Landing;
