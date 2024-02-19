// app/providers.jsx
"use client";
import { ThemeProvider } from "next-themes";

export default function MyThemeProvider({ children }: { children: any }) {
	return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
