"use client";
import React from "react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function NavBar() {
	const { data: session } = useSession();

	return (
		<>
			{session ? (
				<nav>
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
