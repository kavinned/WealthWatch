"use client";
import React, { useState } from "react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NavBar() {
	const { data: session } = useSession();
	const router = useRouter();
	const [openMenu, setOpenMenu] = useState(false);

	const handleClick = () => {
		setOpenMenu(!openMenu);
	};

	return (
		<>
			{session ? (
				<nav className="w-screen max-w-[100svw] h-[7svh] sticky bg-zinc-800 drop-shadow-lg shadow-lg text-sm font-semibold flex-col md:flex-row flex z-50">
					<button
						className="nav-btn h-fit text-xs text-center md:hidden w-fit self-center bg-zinc-900 mt-[0.5rem]"
						onClick={handleClick}
					>
						{openMenu ? "Close" : "Menu"}
					</button>

					<div
						className={`nav-menu flex-col w-full p-5 md:p-0 md:flex-row justify-around gap-3 md:gap-0 z-50 bg-zinc-800 md:flex order-1 ${
							openMenu == true ? "flex" : "hidden"
						}`}
					>
						{session?.user?.role === "admin" && (
							<>
								<Link
									className="nav-btn w-full md:w-fit"
									href="/admin"
									onClick={handleClick}
								>
									Admin Dashboard
								</Link>
								<hr className="rotate-90 border-zinc-500 h-full w-2 hidden md:block" />
							</>
						)}
						<Link
							className="nav-btn w-full md:w-fit"
							href="/stocks"
							onClick={handleClick}
						>
							Stocks
						</Link>
						<hr className="rotate-90 border-zinc-500 h-full w-2 hidden md:block" />
						<Link
							className="nav-btn w-full md:w-fit"
							href="/dashboard"
							onClick={handleClick}
						>
							Dashboard
						</Link>
						<hr className="rotate-90 border-zinc-500 h-full w-2 hidden md:block" />
						<Link
							className="nav-btn w-full md:w-fit"
							href="/budgets"
							onClick={handleClick}
						>
							Budgets
						</Link>
						<hr className="rotate-90 border-zinc-500 h-full w-2 hidden md:block" />
						<button
							className="mt-3 md:mt-0 bg-red-600 text-white border-red-800 border-2 rounded-md py-1 px-2 w-fit self-center hover:bg-red-800 transition-all duration-200 ease-in-out drop-shadow-lg shadow-md shadow-red-950"
							onClick={() => {
								signOut();
								handleClick;
								router.replace("/");
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
