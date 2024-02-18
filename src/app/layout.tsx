import "@/src/styles/app.css";
import { Toaster } from "react-hot-toast";
import ThemeProviderWrapper from "../lib/ThemeProviderWrapper";
import { GeistSans } from "geist/font/sans";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        <Toaster position="top-right" reverseOrder />
        <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
      </body>
    </html>
  );
}
