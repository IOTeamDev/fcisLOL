import Hero from "../components/HeroSection";
import { Card } from "../components/ui/card";

const page = () => {
  return (
    <>
      <Hero />
      <section className="w-full h-screen">
        <div className="h-1/4 flex justify-center items-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            FCIS LOL?! 🤔
          </h1>
        </div>
        <div className="container px-4 md:px-6 flex flex-col items-center">
          <div className="flex w-full justify-around items-center">
            <Card className="flex flex-col items-center p-8">
              <h1 className="text-2xl font-bold">
                Study Chaos? We've Been There
              </h1>
            </Card>
            <Card className="flex flex-col items-center p-8">
              <h1 className="text-2xl font-bold">
                Order from Chaos: Our Mission
              </h1>
            </Card>
            <Card className="flex flex-col items-center p-8">
              <h1 className="text-2xl font-bold">Easy Access, No Fuss </h1>
            </Card>
            <div
              className="flex flex-col justify-center space-y-4"
              id="whoarewe"
            >
              <div className="space-y-2">{/* right */}</div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                {/* under right */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
