import React from "react";
import { getServerSession } from "next-auth";
import TransactionList from "@/app/(components)/TransactionList";

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

	return (
		<div className="flex flex-col items-center justify-center">
			{budget.name} {budget.limit}
			Total Spent:{" "}
			{budget.transactions.reduce((acc, curr) => acc + curr.amount, 0)}
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
