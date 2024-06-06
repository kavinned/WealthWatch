import React from "react";
import TopGainersLoser from "../(components)/TopGainersLoser";
import Search from "./search/page";
import Link from "next/link";

export default async function StocksPage() {
	return (
		<div className="w-screen h-[90vh]">
			<Link href="/stocks/search">Go to search</Link>
			<TopGainersLoser />
		</div>
	);
}
