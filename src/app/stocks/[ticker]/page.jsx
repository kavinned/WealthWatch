import Chart from "@/app/(components)/Chart";
import AddStockButton from "@/app/(components)/AddStockButton";
import React from "react";

export async function fetchStock(ticker) {
	const res = await fetch(
		`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&apikey=${process.env.NEXT_PUBLIC_ALPHAVANTAGE_API_KEY}`
	);
	return res?.json();
}

export async function fetchStockOverview(ticker) {
	const res = await fetch(
		`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=${process.env.NEXT_PUBLIC_ALPHAVANTAGE_API_KEY}`
	);
	return res?.json();
}

export default async function StockDetails({ params }) {
	const [stock, stockOverview] = await Promise.all([
		fetchStock(params.ticker),
		fetchStockOverview(params.ticker),
	]);

	const latestPrice = stock["Time Series (Daily)"][
		Object.keys(stock["Time Series (Daily)"])[0]
	]["4. close"].slice(0, 5);

	return (
		<div className="w-full h-[calc(100dvh-7dvh)] overflow-auto">
			<AddStockButton stock={stock} />
			<div className="w-full h-fit flex flex-col justify-between items-center">
				<h1 className="bg-zinc-800 px-3 py-2 text-2xl font-semibold text-zinc-300 rounded-xl drop-shadow-xl shadow-xl">
					{stockOverview.Symbol}
				</h1>
				<p className="text-sm mt-3 font-semibold text-zinc-800">
					{stockOverview.Name}
				</p>
				<p className="text-xl mt-3 font-semibold text-zinc-800">
					Latest Price: ${latestPrice}
					<span
						className="flex justify-center items-center p-0 m-0 opacity-50"
						style={{ fontSize: "0.6rem" }}
					>
						last updated: {stock["Meta Data"]["3. Last Refreshed"]}
					</span>
				</p>
			</div>
			<div className="w-full flex flex-col justify-center items-center">
				<div className="w-[90%] h-fit grid grid-cols-9 place-items-center place-content-center gap-5">
					<div className="col-span-2 bg-zinc-200 rounded-lg p-3 shadow-2xl drop-shadow-2xl border-2 border-slate-400 border-opacity-50 w-full h-fit flex flex-col gap-5">
						<p className="stock-overview ">
							Analyst Target: <br />{" "}
							<span className="bubble bg-blue-300">
								${stockOverview.AnalystTargetPrice}
							</span>
						</p>
						<p className="stock-overview">
							52 Week High: <br />{" "}
							<span className="bubble bg-emerald-300">
								${stockOverview["52WeekHigh"]}
							</span>
						</p>
						<p className="stock-overview">
							52 Week Low: <br />{" "}
							<span className="bubble bg-red-300">
								${stockOverview["52WeekLow"]}
							</span>
						</p>
						<p className="stock-overview">
							50 Day Moving Average: <br />{" "}
							<span className="bubble">
								${stockOverview["50DayMovingAverage"]}
							</span>
						</p>
					</div>
					<div className="col-span-5 flex flex-col h-full items-center justify-center w-full gap-10 bg-zinc-200 rounded-lg p-3 shadow-2xl drop-shadow-2xl border-2 border-slate-400 border-opacity-50">
						<h2 className="text-xl font-semibold text-zinc-700">
							Prices for the last 30 days
						</h2>
						<Chart stock={stock} />
					</div>
					<div className="col-span-2 bg-zinc-200 rounded-lg p-3 shadow-2xl drop-shadow-2xl border-2 border-slate-400 border-opacity-50 w-full h-fit flex flex-col gap-5">
						<p className="stock-overview">
							Asset Type: <br />{" "}
							<span className="bubble">{stockOverview.AssetType}</span>
						</p>
						<p className="stock-overview">
							Exchange: <br />{" "}
							<span className="bubble">{stockOverview.Exchange}</span>
						</p>
						<p className="stock-overview">
							Country: <br />{" "}
							<span className="bubble">{stockOverview.Country}</span>
						</p>
						<p className="stock-overview">
							Sector: <br />{" "}
							<span className="bubble">{stockOverview.Sector}</span> <br />
							<span className="bubble">{stockOverview.Industry}</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
