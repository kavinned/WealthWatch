import React from "react";
import { getServerSession } from "next-auth";
import TransactionList from "@/app/(components)/TransactionList";
import Link from "next/link";

async function fetchBudget(email, id) {
	const res = await fetch(
		`${process.env.NEXTAUTH_URL}/api/users/${email}/budgets/${id}`,
		{
			cache: "no-store",
		}
	);
	return res?.json();
}
export default async function Budget({ params }) {
	const { id } = params;
	const session = await getServerSession();
	const budget = await fetchBudget(session?.user?.email, id);
	const spentAmt = budget.transactions.reduce(
		(acc, curr) => acc + curr.amount,
		0
	);

	return (
		<div className="flex flex-col items-center justify-center">
			<span className="flex w-screen flex-row justify-end h-3">
				<Link
					href={`/budgets/${id}/transactions/new`}
					className="mt-10 mr-5 text-xs bg-zinc-900 nav-btn"
				>
					Add a new transaction
				</Link>
			</span>
			<span className="flex flex-row justify-between w-fit gap-5 items-center">
				<h1 className="text-2xl text-zinc-700 font-bold">
					Budget for {budget.name}
				</h1>
				<p className="text-lg font-medium bg-zinc-800 p-3 rounded-xl shadow-md drop-shadow-2xl shadow-zinc-600 text-white">
					Total Spent:{" "}
					<span
						className={`${
							spentAmt > budget.limit ? "text-red-500" : "text-emerald-500"
						}`}
					>
						${spentAmt}
					</span>
					/ ${budget.limit}
				</p>
			</span>
			<ul className="max-w-[90vw] w-[50rem] space-y-4 divide-y divide-gray-500 p-5">
				{budget.transactions.map((transaction) => (
					<TransactionList
						key={transaction._id}
						transaction={transaction}
						budget={budget}
					/>
				))}
			</ul>
		</div>
	);
}
