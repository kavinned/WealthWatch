import React from "react";
import BudgetCard from "../(components)/BudgetCard";
import StockCard from "../(components)/StockCard";
import { getServerSession } from "next-auth";

export default async function Dashboard() {
	const session = await getServerSession();

	return (
		<div className="flex flex-col justify-center w-screen h-[90vh]">
			<span className="flex flex-row items-center justify-between">
				<h1 className="text-2xl font-semibold text-zinc-700 ml-5 mt-5">
					Welcome to your <br /> dashboard
				</h1>
				<h2 className="dash-name text-indigo-700 font-bold text-2xl mr-5 mt-5">
					{session?.user?.name}
				</h2>
			</span>
			<div className="w-full h-full flex items-center justify-center">
				<BudgetCard session={session} />;
				<StockCard session={session} />
			</div>
		</div>
	);
}
