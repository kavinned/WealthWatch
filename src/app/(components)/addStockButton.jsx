"use client";

import React from "react";

export default function AddStockButton() {
	async function handleClick() {
		console.log("Add to tracked stocks");
	}

	return (
		<span className="flex w-screen flex-row justify-end h-3">
			<button
				type="button"
				className="mt-10 mr-5 text-xs bg-zinc-900 nav-btn"
				onClick={handleClick}
			>
				Add to tracked stocks
			</button>
		</span>
	);
}
