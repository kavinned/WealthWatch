"use client";

import { useSession } from "next-auth/react";
import React from "react";
import { useRouter } from "next/navigation";

export default function AddStockButton({ stock }) {
	const { data: session } = useSession();
	const router = useRouter();

	async function handleClick() {
		try {
			const symbol = stock["Meta Data"]["2. Symbol"];
			const res = await fetch(`/api/users/${session?.user?.email}/stocks`, {
				method: "POST",
				body: JSON.stringify({ symbol }),
			});
			await res.json();
			router.push("/trackedStocks");
			router.refresh();
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<span className="flex w-full flex-row justify-end h-3">
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
