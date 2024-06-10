"use client";
import { FaTrashAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";

import React from "react";

export default function TrackedStocksList({ stock, session }) {
	const router = useRouter();

	async function handleDelete() {
		await fetch(`/api/users/${session?.user?.email}/stocks/${stock._id}`, {
			method: "DELETE",
		});
		router.refresh();
	}

	return (
		<li className="p-3 border-0 basis-1/3">
			<div className="flex items-center space-x-4 rtl:space-x-reverse bg-zinc-800 p-3 rounded-lg border-0 shadow-md shadow-zinc-500 drop-shadow-md">
				<div
					className="flex-1 min-w-0"
					onClick={() => router.push(`/stocks/${stock.symbol}`)}
				>
					<p className="text-sm font-semibold text-gray-200 cursor-pointer rounded-xl p-2 hover:bg-zinc-700 hover:scale-105 transition-all duration-200 ease-linear">
						{stock.symbol}
					</p>
				</div>
				<FaTrashAlt className="trash" onClick={handleDelete} />
			</div>
		</li>
	);
}
