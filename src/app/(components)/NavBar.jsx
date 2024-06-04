"use client";
import React from "react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function NavBar() {
	const { data: session } = useSession();

	return (
		<>
			{session ? (
				<nav className="flex flex-row gap-10 justify-center items-center w-screen h-[7vh] bg-slate-200 drop-shadow-lg">
					<button onClick={() => signOut()} type="button">
						Sign Out
					</button>
				</nav>
			) : (
				<></>
			)}
		</>
	);
}
