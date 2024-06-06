import React from "react";
import { getServerSession } from "next-auth";

async function fetchBudget(email, id) {
	const res = await fetch(
		`${process.env.NEXTAUTH_URL}/api/users/${email}/budgets/${id}`
	);
	return res?.json();
}
export default async function Budget({ params }) {
	const { id } = params;
	const session = await getServerSession();
	const budget = await fetchBudget(session?.user?.email, id);

	return (
		<div>
			{budget.name} {budget.limit}
			<ul>
				{budget.transactions.map((transaction) => (
					<li key={transaction._id}>{transaction.description}</li>
				))}
			</ul>
		</div>
	);
}
