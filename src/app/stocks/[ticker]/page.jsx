import Chart from "@/app/(components)/Chart";
import React from "react";

export async function fetchStock() {
	const res = await fetch(
		`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=IBM&apikey=demo`
	);
	return res?.json();
}

export default async function StockDetails() {
	const stock = await fetchStock();

	const latestPrice =
		stock["Weekly Adjusted Time Series"][
			Object.keys(stock["Weekly Adjusted Time Series"])[0]
		]["4. close"];

	return (
		<div className="w-screen h-[90vh]">
			<div>
				<h1>{stock["Meta Data"]["2. Symbol"]}</h1>
				<p>{latestPrice}</p>
			</div>
			<div className="w-full h-fit flex justify-center items-center mt-10">
				<div className="flex flex-col h-fit items-center justify-center w-1/2 gap-10">
					<h2 className="text-2xl font-semibold text-zinc-900">
						Prices for the last 30 weeks
					</h2>
					<Chart stock={stock} />
				</div>
			</div>
		</div>
	);
}
