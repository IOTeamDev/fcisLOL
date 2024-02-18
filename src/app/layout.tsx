import "@/src/styles/app.css";
import { Toaster } from "react-hot-toast";
import ThemeProviderWrapper from "../lib/ThemeProviderWrapper";
import NavBar from "../components/NavBar";
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
					{children}
				</ThemeProviderWrapper>
			</body>
		</html>
	);
}
