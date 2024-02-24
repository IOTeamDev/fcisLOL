import { CardContent, Card } from "@/src/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function VideoComponent({
	video,
	target,
}: {
	video: any;
	target: string;
}) {
	return (
		<Link href={target}>
			<Card className="min-w-[300px] hover:scale-105 duration-100 ">
				<div className="relative group overflow-hidden rounded-lg aspect-video">
					<Image
						alt="Thumbnail"
						className="w-full transition-transform object-cover group-hover:scale-105"
						height={169}
						src={video.thumbnail ?? "/thumbnail.webp"}
						style={{
							aspectRatio: "300/169",
							objectFit: "cover",
						}}
					/>
				</div>
				<CardContent className="p-4">
					<div className="text-sm grid gap-1.5">
						<p className="font-semibold line-clamp-2">{video.title}</p>
						<p className="text-xs text-gray-500 dark:text-gray-400">
							{video.description}
						</p>
					</div>
				</CardContent>
			</Card>
		</Link>
	);
}
