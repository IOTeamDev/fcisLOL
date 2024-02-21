import Link from "next/link";
import { Button } from "./ui/button";

export default function Component() {
  return (
    <footer className="w-full py-6  border-t-2">
      <div className="container flex flex-col items-center gap-4 px-4 text-center md:gap-6 md:flex-row md:justify-between lg:px-6">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4 lg:order-2">
          <p className="opacity-50">
            This Masterpiece was created by{" "}
            <Link
              href="https://github.com/ibrahim317/"
              target="_blank"
              className="underline"
            >
              Ibrahim AboElsoud
            </Link>{" "}
            & the AMAZING{" "}
            <Link
              href="https://omarmhasan.bio.link"
              target="_blank"
              className="underline"
            >
              Omar M.Hasan
            </Link>{" "}
            . lol
          </p>
        </div>
        <div className="flex items-center justify-center space-x-4 text-sm md:order-1 md:space-x-6 opacity-80">
          <Link href="mailto:ioteam@proton.me" className="flex items-center">
            <Button className="rounded-full" size="sm" variant="ghost">
              <MailIcon className="w-4 h-4" />
            </Button>
            : Email us
          </Link>
          <Link
            href="https://github.com/IOTeamDev/fcisLOL"
            target="_blank"
            className="flex items-center"
          >
            <Button className="rounded-full" size="sm" variant="ghost">
              <GithubIcon className="w-4 h-4" />
            </Button>
            : See the code
          </Link>
        </div>
      </div>
    </footer>
  );
}

function GithubIcon(props: any) {
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
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function MailIcon(props: any) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
