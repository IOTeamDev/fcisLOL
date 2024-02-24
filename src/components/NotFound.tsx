import Image from "next/image";

const NotFound = () => {
	return (
		<div className="w-full flex-grow flex flex-col justify-center items-center">
			<Image
				width={700}
				height={200}
				src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmdsaHUxYnlqc3R4NHMxNnEzbTNkM242OGlhNmNwODhtamgyeTl3cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gKsJUddjnpPG0/giphy.gif"
				alt="_"
			/>
			<p className="text-4xl font-extrabold absolute text-white">404 POP LOL</p>
		</div>
	);
};

export default NotFound;
