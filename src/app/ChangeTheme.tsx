"use client";
import { useTheme } from "next-themes";
import React from "react";

const ChangeTheme = () => {
	const { resolvedTheme, theme, setTheme } = useTheme();
	return (
		<button
			onClick={() => {
				setTheme(resolvedTheme === "light" ? "dark" : "light");
			}}
			className="p-10 bg-slate-300"
		>
			ChangeTheme
		</button>
	);
};

export default ChangeTheme;
