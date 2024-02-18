import "@/src/styles/app.css";
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="bg-slate-900 text-white">
				<nav></nav>
				{children}
				<footer></footer>
			</body>
		</html>
	);
}
