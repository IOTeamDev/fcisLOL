import Link from "next/link";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/src/components/ui/card";

const LinkCard = ({
	children,
	href,
	className,
}: {
	children: any;
	href: string;
	className?: string;
}) => {
	return (
		<Link
			href={href}
			className="hover:scale-105 max-md:text-xl duration-200 cursor-pointer"
		>
			<Card className={className}>
				<CardContent></CardContent>
				<CardHeader>
					<CardTitle className="flex justify-center items-center">
						{children}
					</CardTitle>
				</CardHeader>
				<CardContent></CardContent>
			</Card>
		</Link>
	);
};

export default LinkCard;
