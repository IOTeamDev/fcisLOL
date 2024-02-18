import "@/src/styles/app.css";
import { Toaster } from "react-hot-toast";
import MyThemeProvider from "../components/MyThemeProvider";
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className=""
				// className="bg-[#090909]   "
			>
				<Toaster position="top-right" reverseOrder />

				<MyThemeProvider>{children}</MyThemeProvider>
				<nav></nav>
				<footer></footer>
			</body>
		</html>
	);
}
