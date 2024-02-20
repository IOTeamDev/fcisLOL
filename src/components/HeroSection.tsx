import Link from "next/link";
import React from "react";

// use this to randomize the image
// const photos = [
//   "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2t0NDFnYzV0d3h4OHl5MHc0aG90eXRyNHd6YmxydDd3cXlibnpoMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fhAwk4DnqNgw8/giphy.gif",
//   "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXdzZmQycTB6bnJ3dDNnM2ZyOHhsYzI5N3I3cGFkZTNlM3NzN3ludCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/12vJgj7zMN3jPy/giphy.gif",
//   "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHJrdTIzMzUyYTEyNzJ2bDBtM2luYjdmanh6OW42MnA5cmdwYzd0dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pFwRzOLfuGHok/giphy.gif",
//   // Add more photo URLs here
// ];

// function getRandomPhoto() {
//   const randomIndex = Math.floor(Math.random() * photos.length);
//   return photos[randomIndex];
// }

export default function Hero() {
  // const randomPhoto = getRandomPhoto();

  return (
    <section className="w-full my-12 md:my-24 lg:my-32 flex flex-col items-center">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <img
            alt="lol"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            height="310"
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2t0NDFnYzV0d3h4OHl5MHc0aG90eXRyNHd6YmxydDd3cXlibnpoMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fhAwk4DnqNgw8/giphy.gif"
            width="550"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Simply Laughing at the Face of Subjects!
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Discover, Learn, Grow: Your Gateway to Endless Possibilities.
                haha!
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <a
                href="/levels"
                className="w-full flex justify-center border-[#020817] border-2 py-2 rounded-xl bg-[#020817] text-white font-bold dark:bg-white dark:text-[#020817]"
              >
                Start Now!
              </a>
            </div>
          </div>
        </div>
      </div>
      <Link href="#whoarewe" className="mt-12 opacity-50 font-light underline">
        What are we?
      </Link>
    </section>
  );
}
