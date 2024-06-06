// "use client";
// import React, { useEffect, useState } from "react";
import Link from "next/link";
import BudgetInfo from "./BudgetInfo";

export default async function BudgetCard({ session, budgets }) {
	// const [budgets, setBudgets] = useState([]);

	// const fetchBudgets = await fetch(
	// 	`${process.env.NEXTAUTH_URL}/api/budgets`
	// ).then((res) => res.json());

	// const budgets = fetchBudgets.slice(0, 4);

	// useEffect(() => {
	// 	const fetchBudgets = async () => {
	// 		const res = await fetch("/api/budgets");
	// 		const data = await res.json();
	// 		setBudgets(data.slice(0, 4));
	// 	};
	// 	fetchBudgets();
	// }, []);

	return (
		<div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg sm:p-8 dark:bg-zinc-600 dark:border-gray-700 drop-shadow-2xl shadow-lg">
			<div className="flex items-center justify-between mb-4">
				<h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
					Budgets
				</h5>
				<Link
					href="/budgets"
					className="text-sm font-medium text-blue-800 hover:underline dark:text-blue-300"
				>
					View all
				</Link>
			</div>
			<div className="flow-root">
				<ul
					role="list"
					className="divide-y divide-gray-200 dark:divide-gray-700"
				>
					{budgets?.map((budget) => (
						<BudgetInfo budget={budget} key={budget._id} />
					))}
					<li className="text-3xl text-slate-200 text-right">...</li>
				</ul>
			</div>
		</div>
	);
}
