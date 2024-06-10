import Link from "next/link";
import BudgetInfo from "./BudgetInfo";

export default async function BudgetCard({ session }) {
	const budgets = await fetch(
		`${process.env.NEXTAUTH_URL}/api/users/${session?.user?.email}/budgets`,
		{ cache: "no-store" }
	).then((res) => res?.json());

	return (
		<div className="w-full max-w-md p-4 rounded-lg shadow-2xl sm:p-8 bg-zinc-800 border-gray-700 drop-shadow-2xl">
			<div className="flex items-center justify-between mb-4">
				<h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
					Budgets
				</h5>
				<Link
					href="/budgets"
					className="text-sm font-medium text-blue-800 hover:underline dark:text-blue-300"
				>
					View all
				</Link>
			</div>
			<div className="flow-root">
				<ul
					role="list"
					className="divide-y divide-gray-200 dark:divide-gray-700"
				>
					{budgets?.map((budget) => (
						<BudgetInfo budget={budget} key={budget._id} />
					))}
					<li className="text-3xl text-slate-200 text-right">...</li>
				</ul>
			</div>
		</div>
	);
}
