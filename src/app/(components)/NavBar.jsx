"use client";
import React from "react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NavBar() {
	const { data: session } = useSession();
	const router = useRouter();

	return (
		<>
			{session ? (
				<nav className=" w-screen h-[7vh] bg-slate-200 drop-shadow-lg text-sm">
					<div className="flex flex-row items-center justify-around w-full h-full">
						<Link className="nav-btn" href="/stocks">
							Stocks
						</Link>
						<hr className="rotate-90 border-zinc-500 h-3 w-2" />
						<Link className="nav-btn" href="/dashboard">
							Dashboard
						</Link>
						<hr className="rotate-90 border-zinc-500 h-3 w-2" />
						<Link className="nav-btn" href="/budgets">
							Budgets
						</Link>
						<hr className="rotate-90 border-zinc-500 h-3 w-2" />
						<button
							className="bg-red-400 text-white border border-red-900 rounded-md py-1 px-2 w-fit self-center hover:bg-red-600 transition-all duration-200 ease-in-out drop-shadow-lg"
							onClick={() => {
								signOut();
								router.push("/");
							}}
							type="button"
						>
							Sign Out
						</button>
					</div>
				</nav>
			) : (
				<></>
			)}
		</>
	);
}
