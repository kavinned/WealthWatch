"use client";
import LoadingStocks from "@/app/(components)/LoadingStocks";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";

export default function Search() {
	const [input, setInput] = useState("");
	const [searchTerm, setSearchTerm] = useState("");
	const [stocks, setStocks] = useState([]);
	const [loading, setLoading] = useState(false);
	const resultsRef = useRef(null);

	useEffect(() => {
		async function fetchStocks() {
			if (!searchTerm) return;
			setLoading(true);
			await new Promise((resolve) => setTimeout(resolve, 100));
			const response = await fetch(
				`https://api.polygon.io/v3/reference/tickers?search=${searchTerm}&active=true&order=asc&limit=100&apiKey=${process.env.NEXT_PUBLIC_POLYGON_API_KEY}`
			);
			const data = await response.json();
			setStocks(data.results);
			setLoading(false);
		}
		fetchStocks();
	}, [searchTerm]);

	useEffect(() => {
		if (resultsRef.current) {
			resultsRef.current?.scrollIntoView({ behavior: "smooth" });
		}
	}, [stocks]);

	return (
		<div className="flex flex-col items-center justify-center w-screen min-h-fit mt-10">
			<label className="text-xl font-bold text-slate-700" htmlFor="search">
				Search for a stock
			</label>
			<span className="flex flex-row items-center justify-center w-full">
				<input
					className="w-1/3 border-2 ring-2 ring-zinc-400 border-zinc-800 p-3 m-3 rounded-lg"
					type="search"
					onChange={(e) => {
						setInput(e.target.value);
					}}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							setSearchTerm(input.toUpperCase());
						}
					}}
				/>
				<button
					className="nav-btn bg-zinc-800 hover:bg-zinc-600 p-3 m-3 rounded-xl"
					onClick={() => {
						setSearchTerm(input.toUpperCase());
					}}
				>
					Search
				</button>
			</span>

			<div
				ref={resultsRef}
				className="flex flex-row flex-wrap items-center justify-center w-full min-h-fit mt-10 mb-10 gap-5 transition-all duration-200 ease-in-out text-zinc-200"
			>
				{stocks?.map((stock) => (
					<Link
						href={`/stocks/${stock.ticker}`}
						className="hover:scale-105 hover:bg-zinc-700 hover:font-semibold w-1/3 border-2 p-3 border-zinc-500 rounded-lg divide-y divide-zinc-500 flex flex-col  justify-center bg-zinc-800 transition-all duration-300 ease-in-out shadow-xl drop-shadow-xl"
						key={stock.ticker}
					>
						<p>{stock.ticker}</p>
						<p>{stock.name}</p>
						{loading && <LoadingStocks />}
					</Link>
				))}
			</div>
		</div>
	);
}
