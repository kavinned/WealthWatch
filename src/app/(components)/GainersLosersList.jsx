import React from "react";
import Link from "next/link";

export default function GainersLosersList({ stock, text }) {
	return (
		<li className="border-0 w-[90%]">
			<Link href={`/stocks/${stock.ticker}`} className="text-emerald-400">
				<div className="flex items-center space-x-4 rtl:space-x-reverse bg-zinc-800 rounded-lg border-0 shadow-md shadow-zinc-500 drop-shadow-md">
					<div className="flex-1 min-w-0 p-3">
						<p className="text-sm font-semibold text-gray-200">
							{stock.ticker}
						</p>
					</div>
					<span className="flex flex-col justify-center items-center p-2">
						<div
							className={`inline-flex items-center font-semibold  text-${text}-400`}
						>
							${stock.price}
						</div>
						<div className={`text-${text}-400`}>{stock.change_percentage}</div>
					</span>
				</div>
			</Link>
		</li>
	);
}
