import Link from "next/link";
import { Card } from "./ui/card";

export default function LinkComponent({
  link,
  target,
}: {
  link: any;
  target: string;
}) {
  return (
    <Link href={target}>
      <Card
        className={`flex items-center p-4 rounded-lg transition-colors border-[#020817] dark:border-white border-2 ${
          link.type === "YOUTUBE_PLAYLIST"
            ? "border-red-500 dark:border-red-500"
            : ""
        } ${
          link.type === "TELEGRAM" ? "border-blue-500 dark:border-blue-500" : ""
        } ${
          link.type === "GOOGLE_DRIVE_FOLDER"
            ? "border-green-500 dark:border-green-500"
            : ""
        }`}
      >
        {link.type === "YOUTUBE_PLAYLIST" ? (
          <YoutubeIcon className="w-7 h-7 fill-red-500 dark:fill-red-500 fil-[#020817] mr-4" />
        ) : link.type === "TELEGRAM" ? (
          <TelegramIcon className="w-7 h-7 fill-blue-500 dark:fill-blue-500 fil-[#020817] mr-4" />
        ) : link.type === "GOOGLE_DRIVE_FOLDER" ? (
          <GoogleDriveIcon className="w-7 h-7 fill-green-500 dark:fill-green-500 fil-[#020817] mr-4" />
        ) : (
          <ChevronRightIcon className="w-7 h-7 dark:fill-white fil-[#020817] mr-4" />
        )}
        <p className="hover:opacity-75 transition-opacity">{link.title}</p>
      </Card>
    </Link>
  );
}

function ChevronRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 256 256"
    >
      <path d="M165.66,90.34a8,8,0,0,1,0,11.32l-64,64a8,8,0,0,1-11.32-11.32l64-64A8,8,0,0,1,165.66,90.34ZM215.6,40.4a56,56,0,0,0-79.2,0L106.34,70.45a8,8,0,0,0,11.32,11.32l30.06-30a40,40,0,0,1,56.57,56.56l-30.07,30.06a8,8,0,0,0,11.31,11.32L215.6,119.6a56,56,0,0,0,0-79.2ZM138.34,174.22l-30.06,30.06a40,40,0,1,1-56.56-56.57l30.05-30.05a8,8,0,0,0-11.32-11.32L40.4,136.4a56,56,0,0,0,79.2,79.2l30.06-30.07a8,8,0,0,0-11.32-11.31Z"></path>
    </svg>
  );
}

function YoutubeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="#000000"
      viewBox="0 0 256 256"
    >
      <path d="M164.44,121.34l-48-32A8,8,0,0,0,104,96v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,145.05V111l25.58,17ZM234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-15.49,113a8,8,0,0,1-4.77,5.49c-31.65,12.22-85.48,12-86,12H128c-.54,0-54.33.2-86-12a8,8,0,0,1-4.77-5.49C34.8,173.39,32,156.57,32,128s2.8-45.39,5.16-54.47A8,8,0,0,1,41.93,68c30.52-11.79,81.66-12,85.85-12h.27c.54,0,54.38-.18,86,12a8,8,0,0,1,4.77,5.49C221.2,82.61,224,99.43,224,128S221.2,173.39,218.84,182.47Z"></path>
    </svg>
  );
}

function TelegramIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="#000000"
      viewBox="0 0 256 256"
    >
      <path d="M236.88,26.19a9,9,0,0,0-9.16-1.57L25.06,103.93a14.22,14.22,0,0,0,2.43,27.21L80,141.45V200a15.92,15.92,0,0,0,10,14.83,15.91,15.91,0,0,0,17.51-3.73l25.32-26.26L173,220a15.88,15.88,0,0,0,10.51,4,16.3,16.3,0,0,0,5-.79,15.85,15.85,0,0,0,10.67-11.63L239.77,35A9,9,0,0,0,236.88,26.19Zm-61.14,36L86.15,126.35l-49.6-9.73ZM96,200V152.52l24.79,21.74Zm87.53,8L100.85,135.5l119-85.29Z"></path>
    </svg>
  );
}

function GoogleDriveIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="#000000"
      viewBox="0 0 256 256"
    >
      <path d="M237.6,151.78,169.13,39.52A15.91,15.91,0,0,0,155.56,32H100.43a15.89,15.89,0,0,0-13.56,7.52l-.05.07L18.44,151.7a16,16,0,0,0-.33,16.42l27.32,47.82A16,16,0,0,0,59.32,224H196.67a16,16,0,0,0,13.89-8.06l27.32-47.82A15.91,15.91,0,0,0,237.6,151.78ZM219,152H172.52L137.33,93.33l22.75-37.92Zm-116.87,0L128,108.88,153.87,152Zm61.34,16,24,40H68.53l24-40ZM128,77.78,110.12,48l35.78-.05ZM95.91,55.41l22.76,37.92L83.47,152H37ZM36.54,168H73.87L54.72,199.92Zm164.74,31.93L182.12,168h37.41Z"></path>
    </svg>
  );
}
