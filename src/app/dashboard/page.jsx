import React from "react";
import BudgetCard from "../(components)/BudgetCard";
import StockCard from "../(components)/StockCard";
import { FaPiggyBank } from "react-icons/fa";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Dashboard() {
	const session = await getServerSession(authOptions);
	console.log(session);

	return (
		<div className="flex flex-col justify-center w-screen h-[90vh]">
			<span className="flex flex-row items-center justify-between">
				<h1
					className="text-2xl font-semibold text-zinc-700 ml-5 mt-5 drop-shadow-lg"
					style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.4)" }}
				>
					Welcome to your <br /> dashboard
				</h1>
				<h2
					style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.4)" }}
					className="dash-name text-emerald-800 font-bold text-2xl mr-5 mt-5 flex flex-col justify-around items-center "
				>
					{session?.user?.name}
					<FaPiggyBank />
				</h2>
			</span>
			<div className="w-full h-full flex items-center justify-center gap-10 sm:p-10 xs:p-10">
				<BudgetCard session={session} />
				<StockCard session={session} />
			</div>
		</div>
	);
}
