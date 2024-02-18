import Link from "next/link";

const LinkCard = ({ children, href }: { children: any, href: string }) => {
  return (
    <Link
      href={href}
      className="duration-100 hover:scale-105 min-h-[300px] p-4 min-w-[300px] rounded-lg flex justify-center items-center border-2"
    >
      {children}
    </Link>
  );
};

export default LinkCard;



