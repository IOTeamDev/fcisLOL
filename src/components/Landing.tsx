import React from "react";

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
          <img
            src="
          https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXB5Y3VyYWZtNGs4MzI4ZXIzeWp2YjV6YTc1bmR0eGZuaTBxdG03bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JlpjgShzDsrMIyFu5U/giphy.gif"
            alt="We Got You!"
            className="w-[700px] h-[600px] aspect-square overflow-hidden rounded-xl object-cover object-center max-[900px]:-mt-10"
          />
        </section>
      </div>
      {/**=============================**/}
      <div className="w-full h-screen flex flex-col justify-center items-center ">
        <section className="p-10 w-full h-4/5 flex justify-center items-center max-[900px]:flex-col">
          <img
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2h2YnZoc2FhcDY4dTlxaGdhNTdvZ2w0aWNyM244MW5ydzB3ZnM5YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ohs83OwfAqZMnwfgQ/giphy.gif"
            alt="We Got You!"
            className=" w-[700px] max-[900px]:w-[1400px] h-[600px] aspect-square overflow-hidden rounded-xl object-cover object-center max-[900px]:-mt-10"
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
              Upload your own materials and share your good stuff with others!
              📤
            </p>
          </div>
          <img
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHIwZm5ud3hwYmRodTA1bHI4em42ZGZvaTMyZDJ0dGJ0dG44bjk4cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VJY3zeoK87CLBKnqqm/giphy.gif"
            alt="Add Your Own!"
            className="w-[700px] h-[600px] aspect-square overflow-hidden rounded-xl object-cover object-center max-[900px]:-mt-10"
          />
        </section>
      </div>
    </>
  );
};

export default Landing;
