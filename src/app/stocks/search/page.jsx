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
        `https://api.polygon.io/v3/reference/tickers?search=${searchTerm}&active=true&order=asc&limit=100&apiKey=${process.env.NEXT_PUBLIC_POLYGON_API_KEY}`,
      );
      const data = await response.json();
      setStocks(data.results);
      setLoading(false);
    }
    fetchStocks();
  }, [searchTerm]);

  useEffect(() => {
    if (resultsRef.current && stocks.length > 0) {
      const firstResult = document.querySelector(
        `[data-stock="stock-item-${stocks[0].ticker}"]`,
      );
      if (firstResult) {
        firstResult.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [stocks]);

  return (
    <div className="container mx-auto mt-10 flex h-full w-full flex-col items-center justify-center">
      <label className="text-xl font-bold text-slate-700" htmlFor="search">
        Search for a stock
      </label>
      <span className="flex w-full flex-row items-center justify-center">
        <input
          className="m-3 w-1/3 min-w-[250px] max-w-[70vw] rounded-lg border-2 border-zinc-800 p-3 ring-2 ring-zinc-400"
          type="search"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setSearchTerm(null);
              setStocks([]);
              setSearchTerm(input.toUpperCase());
            }
          }}
        />
        <button
          className="nav-btn m-3 rounded-xl bg-zinc-800 p-3 hover:bg-zinc-600"
          onClick={() => {
            setSearchTerm(null);
            setStocks([]);
            setSearchTerm(input.toUpperCase());
          }}
        >
          Search
        </button>
      </span>

      <div className="mb-10 mt-10 flex w-full flex-col flex-wrap items-center justify-center gap-5 px-3 pt-5 text-zinc-200 transition-all duration-200 ease-in-out md:mx-0 md:flex-row md:px-0">
        {stocks?.map((stock) => (
          <Link
            data-stock={`stock-item-${stock.ticker}`}
            ref={resultsRef}
            href={`/stocks/${stock.ticker}`}
            className="flex w-full flex-col justify-center divide-y divide-zinc-500 rounded-lg border-2 border-zinc-500 bg-zinc-800 p-3 shadow-xl drop-shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:bg-zinc-700 hover:font-semibold md:w-1/3"
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
