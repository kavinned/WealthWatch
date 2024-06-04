import React from "react";

export default function Budgets() {
	return (
		<div className="h-[90vh] w-screen m-0 p-0">
			<div className="flex justify-between bg-slate-400 text-slate-900 py-2 mb-5 drop-shadow-lg">
				<h2 className="text-xl font-bold mx-5">Budgets</h2>
				<button className="mx-5 text-xs bg-slate-200 text-slate-900 border border-zinc-200 rounded-md py-1 px-2 w-fit  hover:bg-slate-300 transition-all duration-200 ease-in-out drop-shadow-lg">
					Add Budget
				</button>
			</div>
			<ul className="grid grid-cols-2 gap-5 place-items-center">
				<li>January</li>
				<li>February</li>
				<li>March</li>
				<li>April</li>
				<li>January</li>
				<li>February</li>
			</ul>
		</div>
	);
}
