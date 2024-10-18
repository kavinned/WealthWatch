import React from "react";
import GainersLosersList from "./GainersLosersList";
export default async function TopGainersLoser() {
  const stocks = await fetch(
    `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=demo`,
    { cache: "no-store" },
  ).then((res) => res.json());

  const { top_gainers: gainers, top_losers: losers } = stocks;

  console.log(gainers, losers);

  gainers.splice(10, 20);
  losers.splice(10, 20);

  return (
    <div className="grid w-full grid-cols-1 place-items-center">
      <h2 className="mb-5 ml-5 mt-5 text-2xl font-bold text-slate-700">
        Top Gainers
      </h2>
      <ul className="grid w-full grid-cols-5 place-items-center gap-2 px-2 md:px-0">
        {gainers.map((stock) => (
          <GainersLosersList key={stock.ticker} stock={stock} text="emerald" />
        ))}
      </ul>
      <h2 className="mb-5 ml-5 mt-5 text-2xl font-bold text-slate-700">
        Top Losers
      </h2>
      <ul className="grid w-full grid-cols-5 place-items-center gap-2 px-2 md:px-0">
        {losers.map((stock) => (
          <GainersLosersList key={stock.ticker} stock={stock} text="red" />
        ))}
      </ul>
    </div>
  );
}
