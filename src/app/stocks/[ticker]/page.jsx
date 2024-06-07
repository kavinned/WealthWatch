import React from "react";

export async function fetchStock() {
	const res = await fetch(
		`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=IBM&apikey=demo`
	);
	return res?.json();
}

export default async function StockDetails() {
	const stock = await fetchStock();
	console.log(stock);

	const latestPrice =
		stock["Weekly Adjusted Time Series"][
			Object.keys(stock["Weekly Adjusted Time Series"])[0]
		]["4. close"];

	return (
		<div>
			<h1>{stock["Meta Data"]["2. Symbol"]}</h1>
			<p>{latestPrice}</p>
		</div>
	);
}
