"use client";
import Link from "next/link";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function BudgetList({ budget }) {
	const router = useRouter();
	async function handleDelete() {
		await fetch(`/api/budgets/${budget._id}`, {
			method: "DELETE",
		});
		router.refresh();
	}

	return (
		<li className="p-3 border-0">
			<div className="flex items-center space-x-4 rtl:space-x-reverse bg-zinc-800 p-3 rounded-lg border-0 shadow-md shadow-zinc-500 drop-shadow-md">
				<div className="flex-1 min-w-0">
					<p className="text-sm font-semibold text-gray-200">{budget.name}</p>
				</div>
				<div className="inline-flex items-center text-base font-medium  text-gray-400">
					${budget.limit}
				</div>
				<Link href={`/budgets/${budget._id}`} className="text-emerald-400">
					<FaPencilAlt className="cursor-pointer text-emerald-400" />
				</Link>
				<FaTrashAlt
					className="cursor-pointer text-red-400"
					onClick={handleDelete}
				/>
			</div>
		</li>
	);
}
