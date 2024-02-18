import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LinkCard = ({ children, href }: { children: any; href: string }) => {
  return (
    <Link href={href} className="hover:scale-105 duration-200 cursor-pointer">
      <Card>
        <CardHeader>
          <CardTitle>{children}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl">✨</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default LinkCard;
