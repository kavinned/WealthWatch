import React from "react";
import BudgetCard from "../(components)/BudgetCard";
import StockCard from "../(components)/StockCard";
import { FaPiggyBank } from "react-icons/fa";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Dashboard() {
	const session = await getServerSession(authOptions);

	return (
		<div className="flex flex-col justify-center w-full h-[calc(100dvh-7dvh)]">
			<span className="flex flex-row items-center justify-between">
				<h1
					className="text-2xl font-semibold text-zinc-700 ml-5 mt-5 drop-shadow-lg"
					style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.4)" }}
				>
					Welcome to your <br /> dashboard
				</h1>
				<span className="flex flex-col">
					<p className="text-4xl font-bold text-zinc-700">
						{new Date().toLocaleTimeString(undefined, {
							hour: "numeric",
							minute: "numeric",
						})}
					</p>
					<p className="text-md font-medium text-zinc-700 text-center">
						{new Date().toDateString()}
					</p>
				</span>
				<h3
					style={{ textShadow: "0px 2px 2px rgba(0, 0, 0, 0.4)" }}
					className="dash-name text-slate-700 font-bold text-lg mr-5 mt-5 flex flex-col justify-around items-center bg-zinc-200 p-4 border border-zinc-500 border-opacity-30 rounded-lg drop-shadow-lg shadow-sm"
				>
					{session?.user?.name}
					<FaPiggyBank />
				</h3>
			</span>
			<div className="w-full h-full flex items-center justify-center gap-10 sm:p-10 xs:p-10">
				<BudgetCard session={session} />
				<StockCard session={session} />
			</div>
		</div>
	);
}
