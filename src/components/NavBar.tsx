import Link from "next/link";
import { Button } from "@/components/ui/button";
import ChangeTheme from "./ChangeTheme";

export default function NavBar() {
  return (
    <nav className="w-full p-2 fixed">
      <div className="flex justify-center items-center">
        <div className="w-3/4 flex items-center justify-between h-14">
          <Link
            className="flex items-center gap-2 text-lg font-semibold"
            href="/"
          >
            <PackageIcon className="h-6 w-6" />
            <span> FCIS LOL </span>
          </Link>

          <div className="flex items-center gap-4">
            <Link href={"/login"}>
              <Button size="sm">Sign In</Button>
            </Link>
            <ChangeTheme />
          </div>
        </div>
      </div>
    </nav>
  );
}

function PackageIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}
