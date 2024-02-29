import Link from "next/link";
import { Card } from "./ui/card";

export default function FileComponent({
  file,
  target,
}: {
  file: any;
  target: string;
}) {
  return (
    <Link href={target}>
      <Card className="p-4 border-[#020817] dark:border-white border-2">
        <div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center p-3 rounded-lg border w-12 h-12 bg-gray-100 dark:bg-gray-800">
              <FileIcon className="w-6 h-6 fill-muted" />
            </div>
            <div className="leading-none w-full">
              <div className="font-semibold">{file.title}</div>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}

function FileIcon(props: any) {
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
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  );
}
