"use client";
import Loading from "@/app/loading";
import React, { useEffect, useState } from "react";

export default function Search() {
	const [input, setInput] = useState("");
	const [searchTerm, setSearchTerm] = useState("");
	const [stocks, setStocks] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		async function fetchStocks() {
			if (!searchTerm) return;
			setLoading(true);
			const response = await fetch(
				`https://api.polygon.io/v3/reference/tickers?search=${searchTerm}&active=true&order=asc&limit=100&apiKey=hQLZRnlZWNUZMBximrKg8D15QgeJ4OZh`
			);
			const data = await response.json();
			console.log(data.results);
			setStocks(data.results);
			setLoading(false);
		}
		fetchStocks();
	}, [searchTerm]);

	return (
		<div className="flex flex-col items-center justify-center w-screen min-h-fit mt-10">
			<fieldset className="mb-5">
				<legend>Search for a stock</legend>
				<input
					type="search"
					onChange={(e) => {
						setInput(e.target.value);
					}}
					className="border-2 rounded-lg p-2 border-slate-300 focus:ring-2 ring-slate-700 focus:border-slate-600"
				/>
				<button
					onClick={() => {
						setSearchTerm(input.toUpperCase());
					}}
				>
					Search
				</button>
			</fieldset>
			<div className="flex items-center justify-center flex-col gap-5">
				{loading && <Loading />}
				{stocks?.map((stock) => (
					<div
						className=" flex flex-col divide-y divide-black w-full border border-zinc-500 p-2 rounded-md"
						key={stock.ticker}
					>
						<p>{stock.ticker}</p>
						<p>{stock.name}</p>
					</div>
				))}
			</div>
		</div>
	);
}
