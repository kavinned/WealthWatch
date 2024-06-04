"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function BudgetCard({ session }) {
	const [budgets, setBudgets] = useState([]);

	useEffect(() => {
		const fetchBudgets = async () => {
			const res = await fetch("/api/budgets");
			const data = await res.json();
			setBudgets(data);
		};
		fetchBudgets();
	}, []);

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
					{budgets.map((budget) => (
						<li key={budget._id} className="py-3 sm:py-4">
							<div className="flex items-center">
								<div className="flex-shrink-0"></div>
								<div className="flex-1 min-w-0 ms-4">
									<p className="text-lg font-semibold text-gray-900 truncate dark:text-white">
										{budget.name}
									</p>
								</div>
								<div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
									${budget.limit}
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
