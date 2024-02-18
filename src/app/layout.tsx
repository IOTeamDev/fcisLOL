import "@/src/styles/app.css";
import { Toaster } from "react-hot-toast";
import NavBar from "../components/NavBar";
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
        <ThemeProviderWrapper>
					<NavBar />
          <main>{children}</main>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
