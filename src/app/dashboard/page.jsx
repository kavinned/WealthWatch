import React from "react";
import BudgetCard from "../(components)/BudgetCard";
import StockCard from "../(components)/StockCard";
import { FaPiggyBank } from "react-icons/fa";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Dashboard() {
	const session = await getServerSession(authOptions);

	return (
		<div className="flex flex-col justify-between w-full h-[100svh] max-w-[100svw] md:h-[calc(100dvh-7dvh)]">
			<span className="flex md:flex-row flex-col items-center justify-between gap-5">
				<h1
					className="text-xl md:text-2xl font-semibold text-zinc-700 ml-5 mt-5 drop-shadow-lg order-3 md:order-2"
					style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.4)" }}
				>
					Welcome to your <br className="hidden md:block" /> dashboard
				</h1>
				<span className="flex md:flex-col gap-5 order-2 md:mt-5">
					<p className="md:text-4xl font-bold text-zinc-700">
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
					className="dash-name text-slate-700 font-bold md:text-lg md:mr-5 md:mt-5 flex md:flex-col md:justify-around md:items-center md:bg-zinc-200 md:p-4 md:border md:border-zinc-500 md:border-opacity-30 md:rounded-lg md:drop-shadow-lg md:shadow-sm order-1 md:order-2 ml-auto md:ml-0 mr-2 mt-2"
				>
					{session?.user?.name}
					<FaPiggyBank className="hidden md:block" />
				</h3>
			</span>
			<div className="flex items-center flex-col md:flex-row justify-center gap-10 md:p-10 xs:p-10 mb-36 max-w-[100%] md:h-full w-[100vw] -z-0">
				<BudgetCard session={session} />
				<StockCard session={session} />
			</div>
		</div>
	);
}
