import { authOptions } from "../api/auth/[...nextauth]/route";
import TrackedStocksList from "../(components)/TrackedStocksList";
import { getServerSession } from "next-auth";

export default async function TrackedStocksPage() {
	const session = await getServerSession(authOptions);
	const stocks = await fetch(
		`${process.env.NEXTAUTH_URL}/api/users/${session?.user?.email}/stocks`,
		{
			cache: "no-store",
		}
	).then((res) => res.json());

	return (
		<div className="w-full flex justify-center">
			<ul className="divide-y divide-gray-200 dark:divide-gray-700 w-full flex flex-row flex-wrap">
				{stocks.map((stock) => (
					<TrackedStocksList session={session} stock={stock} key={stock._id} />
				))}
			</ul>
		</div>
	);
}
