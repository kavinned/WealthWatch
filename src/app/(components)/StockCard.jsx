"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function StockCard({ session }) {
	const [stocks, setStocks] = useState([
		{ _id: 1, name: "GOOGLE", price: 1000 },
	]);

	// useEffect(() => {
	// 	const fetchStocks = async () => {
	// 		const res = await fetch("/api/stocks");
	// 		const data = await res.json();
	// 		setStocks(data);
	// 	};
	// 	fetchStocks();
	// }, []);

	console.log(stocks);

	return (
		<div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow-2xl sm:p-8 dark:bg-zinc-600 dark:border-gray-700 drop-shadow-2xl">
			<div className="flex items-center justify-between mb-4">
				<h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
					Stocks
				</h5>
				<Link
					href="/stocks"
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
					{stocks.map((stock) => (
						<li key={stock._id} className="py-3 sm:py-4">
							<div className="flex items-center">
								<div className="flex-shrink-0"></div>
								<div className="flex-1 min-w-0 ms-4">
									<p className="text-lg font-semibold text-gray-900 truncate dark:text-white">
										{stock.name}
									</p>
								</div>
								<div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
									${stock.price}
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
