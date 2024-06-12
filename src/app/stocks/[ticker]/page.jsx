import Chart from "@/app/(components)/Chart";
import AddStockButton from "@/app/(components)/AddStockButton";
import React from "react";

export async function fetchStock(ticker) {
	const res = await fetch(
		`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo`
	);
	return res?.json();
}

export async function fetchStockOverview(ticker) {
	const res = await fetch(
		`https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=demo`
	);
	return res?.json();
}

export default async function StockDetails({ params }) {
	const stock = await fetchStock(params.ticker);
	const stockOverview = await fetchStockOverview(params.ticker);

	console.log(stockOverview);

	const latestPrice = stock["Time Series (Daily)"][
		Object.keys(stock["Time Series (Daily)"])[0]
	]["4. close"].slice(0, 5);

	return (
		<div className="w-full h-[calc(100dvh-7dvh)] overflow-auto">
			<AddStockButton stock={stock} />
			<div className="w-full h-fit flex flex-col justify-center items-center">
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
			<div className="w-full h-fit flex justify-center items-center mt-3">
				<div className="flex flex-col h-fit items-center justify-center w-1/2 gap-10 bg-zinc-200 rounded-lg p-10 shadow-2xl drop-shadow-2xl border-2 border-slate-400 border-opacity-50">
					<h2 className="text-xl font-semibold text-zinc-700">
						Prices for the last 30 days
					</h2>
					<Chart stock={stock} />
				</div>
			</div>
			<div>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nemo,
					explicabo recusandae reprehenderit ut temporibus suscipit quis
					reiciendis doloribus vitae dolorum optio aliquam labore aut
					consectetur unde debitis laboriosam ipsam.
				</p>
			</div>
			<div>
				<p>
					Ea, aspernatur ipsam distinctio, exercitationem laboriosam dolorum
					quaerat ullam quos molestiae pariatur quia at tempora! Obcaecati,
					veritatis, blanditiis architecto sed, quidem animi inventore omnis
					sunt vero nemo corporis tempore asperiores.
				</p>
			</div>
			<div>
				<p>
					Pariatur quae obcaecati reiciendis beatae optio quo maxime neque?
					Facilis necessitatibus pariatur excepturi delectus suscipit culpa
					dolor obcaecati magnam nostrum eum veniam, sunt ipsa saepe unde
					recusandae impedit voluptatum veritatis.
				</p>
			</div>
			<div>
				<p>
					Quas nesciunt fugit laboriosam vero placeat id illum beatae tempora
					provident eius aperiam distinctio harum, qui voluptas, nobis pariatur!
					Omnis repudiandae dolorum sed deleniti maiores aliquid modi odit
					commodi voluptatem?
				</p>
			</div>
		</div>
	);
}
