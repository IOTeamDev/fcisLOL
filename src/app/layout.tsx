import "../styles/app.css";
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<nav></nav>
				{children}
				<footer></footer>
			</body>
		</html>
	);
}
