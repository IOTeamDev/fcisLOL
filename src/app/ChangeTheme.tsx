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
			<Button variant={"ghost"}>Change theme</Button>
		</div>
	);
};

export default ChangeTheme;
