import React from "react";
import Image from "next/image";

const Landing = () => {
	return (
		<div className=" flex flex-col justify-center items-center gap-20 mt-20 text-center">
			<div className="flex flex-col justify-center items-center">
				<section className="p-10 w-full flex justify-between items-center flex-col-reverse">
					<div>
						<h1 className="text-7xl max-[900px]:text-5xl font-bold py-2 max-[900px]:py-4 max-[900px]:text-center max-[500px]:text-4xl">
							All in One PLace!
						</h1>
						<p className="text-4xl max-[900px]:text-3xl max-[500px]:text-2xl  max-[900px]:text-center">
							Videos 🎬, Notes 📝, Recordings 📹, Exams 🖊... and more
						</p>
					</div>
					<Image
						src="/searchblack.svg"
						alt="We Got You!"
						width={700}
						height={600}
					/>
				</section>
			</div>
			{/**=============================**/}
			<div className=" flex flex-col justify-center items-center">
				<section className="p-10 w-full flex justify-between items-center flex-col">
					<Image src="/book.svg" alt="We Got You!" width={700} height={600} />
					<div>
						<h1 className="text-7xl max-[900px]:text-5xl font-bold py-2 max-[900px]:py-4 max-[900px]:text-center max-[500px]:text-4xl">
							Well Organized
						</h1>
						<p className="text-4xl max-[900px]:text-3xl max-[500px]:text-2xl  max-[900px]:text-center">
							Get Access to all Materials 📚 by Years, Semesters and even
							Subjects!
						</p>
					</div>
				</section>
			</div>
			{/**=============================**/}
			<div className="mx-auto max-w-[1200px] flex flex-col justify-center items-center mb-20">
				<section className="p-10 w-full flex justify-between items-center flex-col-reverse">
					<div>
						<h1 className="text-7xl max-[900px]:text-5xl font-bold py-2 max-[900px]:py-4 max-[900px]:text-center max-[500px]:text-4xl">
							Add Your Own!
						</h1>
						<p className="text-4xl max-[900px]:text-3xl max-[500px]:text-2xl  max-[900px]:text-center">
							Upload your own resources and spread knowledge with the community!
							📤
						</p>
					</div>
					<Image
						src="/Education-rafiki.svg"
						alt="We Got You!"
						width={700}
						height={600}
					/>
				</section>
			</div>
		</div>
	);
};

export default Landing;
