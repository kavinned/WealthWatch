import React from "react";
import GainersLosersList from "./GainersLosersList";
export default async function TopGainersLoser() {
	const stocks = await fetch(
		"https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=demo"
	).then((res) => res.json());

	const { top_gainers: gainers, top_losers: losers } = stocks;

	return (
		<>
			<h2 className="text-2xl font-bold text-slate-700 mt-5 ml-5 mb-5">
				Top Gainers
			</h2>
			<ul className="grid grid-cols-4 place-items-center gap-2">
				{gainers.map((stock) => (
					<GainersLosersList key={stock.ticker} stock={stock} text="emerald" />
				))}
			</ul>
			<h2 className="text-2xl font-bold text-slate-700 mt-5 ml-5 mb-5">
				Top Losers
			</h2>
			<ul className="grid grid-cols-4 place-items-center gap-2">
				{losers.map((stock) => (
					<GainersLosersList key={stock.ticker} stock={stock} text="red" />
				))}
			</ul>
		</>
	);
}
