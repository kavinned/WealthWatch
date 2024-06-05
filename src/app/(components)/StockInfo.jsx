"use client";
import React from "react";

export default function StockInfo({ stock }) {
	return (
		<li key={stock._id} className="py-3 sm:py-4">
			<div className="flex items-center">
				<div className="flex-shrink-0"></div>
				<div className="flex-1 min-w-0 ms-4">
					<p
						onClick={() => console.log(stock)}
						className="text-lg font-semibold text-gray-900 truncate dark:text-white"
					>
						{stock.name}
					</p>
				</div>
				<div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
					${stock.price}
				</div>
			</div>
		</li>
	);
}
