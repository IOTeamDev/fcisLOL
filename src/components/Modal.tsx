"use client";
import React, { useState, useRef, useEffect } from "react";

const Modal = (props: any) => {
	const [showModal, setShowModal] = useState(false);
	const modalRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				modalRef.current &&
				!modalRef.current.contains(event.target as Node)
			) {
				setShowModal(false);
			}
		};

		if (showModal) {
			document.addEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [showModal]);

	return (
		<div>
			<div onClick={() => setShowModal(true)}>{props.trigger}</div>
			{showModal && (
				<div className="absolute inset-0 z-20 flex max-h-screen justify-center items-center">
					<div ref={modalRef} className="z-30">
						{props.form}
					</div>
					<div
						onClick={() => setShowModal(false)}
						className="fixed inset-0 bg-black dark:bg-slate-800 dark:bg-opacity-50 bg-opacity-15 "
					></div>
				</div>
			)}
		</div>
	);
};

export default Modal;
