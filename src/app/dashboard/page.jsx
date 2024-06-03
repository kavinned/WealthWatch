"use client";
import React from "react";
import { useSession } from "next-auth/react";

export default function Dashboard() {
	const { data: session } = useSession();

	return (
		<div className="flex flex-col items-center justify-center bg-slate-400">
			{session?.user?.name} {session?.user?.email}
		</div>
	);
}
