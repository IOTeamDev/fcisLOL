import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const photos = [
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2t0NDFnYzV0d3h4OHl5MHc0aG90eXRyNHd6YmxydDd3cXlibnpoMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fhAwk4DnqNgw8/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXdzZmQycTB6bnJ3dDNnM2ZyOHhsYzI5N3I3cGFkZTNlM3NzN3ludCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/12vJgj7zMN3jPy/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHJrdTIzMzUyYTEyNzJ2bDBtM2luYjdmanh6OW42MnA5cmdwYzd0dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pFwRzOLfuGHok/giphy.gif",
  // Add more photo URLs here
];

function getRandomPhoto() {
  const randomIndex = Math.floor(Math.random() * photos.length);
  return photos[randomIndex];
}

export default function Hero() {
  const randomPhoto = getRandomPhoto();

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <img
            alt="Image"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            height="310"
            src={randomPhoto}
            width="550"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                SimplyLaughing at the Face of Subjects!
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Discover, Learn, Grow: Your Gateway to Endless Possibilities
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button type="submit">Start Studying!</Button>
              <Link href={"/register"}>
                <Button>Be a Creator</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
