"use client";
import Loading from "@/app/loading";
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
			console.log(data.results);
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
				className="flex flex-col items-center justify-center w-full min-h-fit mt-10 gap-5"
			>
				{stocks?.map((stock) => (
					<Link
						href={`/stocks/${stock.ticker}`}
						className="w-1/3 border-2 p-3 border-zinc-500 rounded-lg divide-y divide-zinc-500 flex flex-col  justify-center bg-slate-200"
						key={stock.ticker}
					>
						<p>{stock.ticker}</p>
						<p>{stock.name}</p>
						{loading && <Loading />}
					</Link>
				))}
			</div>
		</div>
	);
}
