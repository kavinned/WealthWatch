"use client";
import { FaTrashAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";

import React from "react";

export default function TrackedStocksList({ stock, session }) {
  const router = useRouter();

  async function handleDelete() {
    await fetch(`/api/users/${session?.user?.email}/stocks/${stock._id}`, {
      method: "DELETE",
    });
    router.refresh();
  }

  return (
    <li className="basis-1/3 border-0 p-3">
      <div className="flex items-center space-x-4 rounded-lg border-0 bg-zinc-800 p-3 shadow-md shadow-zinc-500 drop-shadow-md rtl:space-x-reverse">
        <div
          className="min-w-0 flex-1"
          onClick={() => router.push(`/stocks/${stock.symbol}`)}
        >
          <p className="cursor-pointer rounded-xl p-2 text-sm font-semibold text-gray-200 transition-all duration-200 ease-linear hover:scale-105 hover:bg-zinc-700">
            {stock.symbol}
          </p>
        </div>
        <FaTrashAlt className="trash" onClick={handleDelete} />
      </div>
    </li>
  );
}
