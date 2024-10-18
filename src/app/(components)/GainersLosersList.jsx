import React from "react";
import Link from "next/link";

export default function GainersLosersList({ stock, text }) {
  return (
    <li className="w-[90%] border-0">
      <Link href={`/stocks/${stock.ticker}`} className="text-emerald-400">
        <div className="flex flex-col items-center rounded-lg border-0 bg-zinc-800 shadow-md shadow-zinc-500 drop-shadow-md md:flex-row md:space-x-4 rtl:space-x-reverse">
          <div className="min-w-0 flex-1 p-3">
            <p className="text-sm font-semibold text-gray-200">
              {stock.ticker}
            </p>
          </div>
          <span className="-mt-5 flex flex-col items-center justify-center p-3 md:mt-0">
            <div className={`items-center font-semibold text-${text}-400`}>
              ${stock.price}
            </div>
            <div className={`text-${text}-400`}>
              {`${Math.round(
                stock.change_percentage.split("%").splice(0, 1),
              )}%`}
            </div>
          </span>
        </div>
      </Link>
    </li>
  );
}
