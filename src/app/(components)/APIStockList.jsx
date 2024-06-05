import React from "react";
import Link from "next/link";

export default function APIStockList({ stock, text }) {
	return (
		<li className="border-0 w-[90%]">
			<div className="flex items-center space-x-4 rtl:space-x-reverse bg-zinc-800 p-3 rounded-lg border-0 shadow-md shadow-zinc-500 drop-shadow-md">
				<div className="flex-1 min-w-0">
					<p className="text-sm font-semibold text-gray-200">{stock.ticker}</p>
				</div>
				<div className={`text-${text}-400`}>{stock.change_percentage}</div>
				<div
					className={`inline-flex items-center text-base font-medium  text-${text}-700`}
				>
					${stock.price}
				</div>
				<Link href={`/stocks/${stock._id}`} className="text-emerald-400"></Link>
			</div>
		</li>
	);
}
