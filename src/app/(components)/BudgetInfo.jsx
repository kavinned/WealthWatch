"use client";
import React from "react";

export default function BudgetInfo({ budget }) {
	return (
		<li key={budget._id} className="py-3 sm:py-4">
			<div className="flex items-center">
				<div className="flex-shrink-0"></div>
				<div className="flex-1 min-w-0 ms-4">
					<p
						onClick={() => console.log(budget)}
						className="cursor-pointer text-lg font-semibold text-gray-900 truncate dark:text-white"
					>
						{budget.name}
					</p>
				</div>
				<div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
					${budget.limit}
				</div>
			</div>
		</li>
	);
}
