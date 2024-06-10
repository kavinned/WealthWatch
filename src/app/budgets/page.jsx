import React from "react";
import BudgetList from "../(components)/BudgetList";
import Link from "next/link";
import { getServerSession } from "next-auth";
async function fetchBudgets(email) {
	const res = await fetch(
		`${process.env.NEXTAUTH_URL}/api/users/${email}/budgets`,
		{
			cache: "no-store",
		}
	);
	if (!res) {
		return [];
	}
	return res?.json();
}

export default async function Budgets() {
	const session = await getServerSession();
	const budgets = await fetchBudgets(session?.user?.email);

	return (
		<div className="h-[calc(100vh-7vh)] w-screen flex items-center flex-col">
			<span className="flex w-screen flex-row justify-end h-3">
				<Link
					href="/budgets/new"
					className="mt-10 mr-5 text-xs bg-zinc-900 nav-btn"
				>
					Add a new budget
				</Link>
			</span>
			<ul className="max-w-[90vw] w-[50rem] space-y-4 divide-y divide-gray-500 p-5">
				{budgets.map((budget) => (
					<BudgetList key={budget._id} budget={budget} session={session} />
				))}
			</ul>
		</div>
	);
}
