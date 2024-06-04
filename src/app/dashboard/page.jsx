"use client";
import React from "react";

export default function Dashboard() {
	return (
		<div className="flex flex-row gap-10 h-[90vh] w-screen items-center justify-center text-xl">
			<div className="flex flex-col items-center justify-center w-1/5 h-1/2">
				<h3 className="mb-5 text-sm font-semibold bg-slate-200 bg-opacity-80 border border-zinc-700 p-2 rounded-lg w-full text-center drop-shadow-xl shadow-md">
					Tracked Stocks
				</h3>
				<ul className="w-full h-full bg-slate-400 p-5 rounded-lg shadow-emerald-300 shadow-md min-w-fit text-center drop-shadow-xl">
					<li>GOOG</li>
					<li>MSFT</li>
					<li>AMZN</li>
					<li>TSLA</li>
					<li>AAPL</li>
				</ul>
			</div>
			<div className="flex flex-col items-center justify-center w-1/5 h-1/2">
				<h3 className="mb-5 text-sm font-semibold bg-slate-200 bg-opacity-80 border border-zinc-700 p-2 rounded-lg w-full text-center drop-shadow-xl shadow-md">
					Budget Lists
				</h3>
				<ul className="w-full h-full bg-slate-400 p-5 rounded-lg shadow-sky-300 shadow-md min-w-fit text-center drop-shadow-xl">
					<li>January</li>
					<li>February</li>
					<li>March</li>
					<li>April</li>
					<li>May</li>
				</ul>
			</div>
		</div>
	);
}
