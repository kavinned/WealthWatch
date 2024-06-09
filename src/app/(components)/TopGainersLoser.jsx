import React from "react";
import GainersLosersList from "./GainersLosersList";
export default async function TopGainersLoser() {
	const stocks = await fetch(
		"https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=demo",
		{ cache: "no-store" }
	).then((res) => res.json());

	const { top_gainers: gainers, top_losers: losers } = stocks;

	gainers.splice(0, 10);
	losers.splice(0, 10);

	return (
		<div className="grid grid-cols-1 place-items-center w-full">
			<h2 className="text-2xl font-bold text-slate-700 mt-5 ml-5 mb-5">
				Top Gainers
			</h2>
			<ul className="grid grid-cols-5 place-items-center w-full gap-2">
				{gainers.map((stock) => (
					<GainersLosersList key={stock.ticker} stock={stock} text="emerald" />
				))}
			</ul>
			<h2 className="text-2xl font-bold text-slate-700 mt-5 ml-5 mb-5">
				Top Losers
			</h2>
			<ul className="grid grid-cols-5 place-items-center gap-2 w-full">
				{losers.map((stock) => (
					<GainersLosersList key={stock.ticker} stock={stock} text="red" />
				))}
			</ul>
		</div>
	);
}
