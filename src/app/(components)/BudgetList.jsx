"use client";
import Link from "next/link";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function BudgetList({ budget, session }) {
  const email = session?.user?.email;
  const router = useRouter();

  async function handleDelete() {
    const res = await fetch(`/api/users/${email}/budgets/${budget._id}`, {
      method: "DELETE",
    });
    await res?.json();

    router.refresh();
  }

  return (
    <li className="border-0 p-3">
      <div className="flex items-center space-x-4 rounded-lg border-0 bg-zinc-800 p-3 shadow-md shadow-zinc-500 drop-shadow-md rtl:space-x-reverse">
        <div
          className="min-w-0 flex-1"
          onClick={() => router.push(`/budgets/${budget._id}`)}
        >
          <p className="cursor-pointer rounded-xl p-2 text-sm font-semibold text-gray-200 transition-all duration-200 ease-linear hover:scale-105 hover:bg-zinc-700">
            {budget.name}
          </p>
        </div>
        <div className="inline-flex items-center text-base font-medium text-gray-400">
          Limit: ${budget.limit}
        </div>
        <Link href={`/budgets/${budget._id}/edit`} className="text-emerald-400">
          <FaPencilAlt className="edit" />
        </Link>
        <FaTrashAlt className="trash" onClick={handleDelete} />
      </div>
    </li>
  );
}
