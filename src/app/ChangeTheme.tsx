"use client";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import React from "react";

const ChangeTheme = () => {
	const { resolvedTheme, theme, setTheme } = useTheme();
	return (
		<div
			onClick={() => {
				setTheme(resolvedTheme === "light" ? "dark" : "light");
			}}
		>
			<Button variant={"ghost"}>
				{resolvedTheme === "light" ? "Dark mode" : "Light mode"}
			</Button>
		</div>
	);
};

export default ChangeTheme;
