import "@/src/styles/app.css";
import { Toaster } from "react-hot-toast";
import NavBar from "../components/NavBar";
import ThemeProviderWrapper from "../lib/ThemeProviderWrapper";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "LOL",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="min-h-screen flex flex-col">
        <Toaster position="top-center" reverseOrder />
        <ThemeProviderWrapper>
          <NavBar />
          <main className="flex-grow flex flex-col min-h-[calc(100vh-30px)]">
            {children}
          </main>
          <Footer />
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
