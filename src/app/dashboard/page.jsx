"use client";
import React from "react";

export default function Dashboard() {
	return (
		<div className="flex flex-row gap-10 h-[90vh] w-screen items-center justify-center">
			<div className="flex flex-col items-center justify-center bg-slate-400 h-1/2 p-5 rounded-lg shadow-emerald-300 shadow-md min-w-fit w-1/5">
				<h3 className="mb-5 text-sm font-semibold bg-slate-300 p-2 rounded-lg">
					Tracked Stocks
				</h3>
				<ul>
					<li>GOOG</li>
					<li>MSFT</li>
					<li>AMZN</li>
					<li>TSLA</li>
					<li>AAPL</li>
				</ul>
			</div>
			<div className="flex flex-col items-center justify-center bg-slate-400 h-1/2 p-5 rounded-lg shadow-sky-300 shadow-md min-w-fit w-1/5">
				<h3 className="mb-5 text-sm font-semibold bg-slate-300 p-2 rounded-lg ">
					Budget Lists
				</h3>
				<ul>
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
