"use client";
import React from "react";
import Link from "next/link";

export default function StockInfo({ stock }) {
	return (
		<li key={stock._id} className="py-3 sm:py-4">
			<Link href={`/stocks/${stock._id}`}>
				<div className="flex items-center">
					<div className="flex-shrink-0"></div>
					<div className="flex-1 flex justify-center min-w-0 ms-4">
						<p className="text-lg font-semibold text-gray-900 truncate dark:text-white cursor-pointer">
							{stock.symbol}
						</p>
					</div>
					{/* <div className="inline-flex items-center text-base font-semibold text-gray-900">
						${stock.price}
					</div> */}
				</div>
			</Link>
		</li>
	);
}
