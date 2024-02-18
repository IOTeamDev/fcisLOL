import "@/src/styles/app.css";
import { Toaster } from "react-hot-toast";
import NavBar from "../components/NavBar";
import ThemeProviderWrapper from "../lib/ThemeProviderWrapper";
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<Toaster position="top-right" reverseOrder />
				<ThemeProviderWrapper>
					<NavBar />
					<main>{children}</main>
					<footer></footer>
				</ThemeProviderWrapper>
			</body>
		</html>
	);
}
