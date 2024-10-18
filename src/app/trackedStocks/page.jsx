import { authOptions } from "../api/auth/[...nextauth]/route";
import TrackedStocksList from "../(components)/TrackedStocksList";
import { getServerSession } from "next-auth";

export default async function TrackedStocksPage() {
  const session = await getServerSession(authOptions);
  const stocks = await fetch(
    `${process.env.NEXTAUTH_URL}/api/users/${session?.user?.email}/stocks`,
    {
      cache: "no-store",
    },
  ).then((res) => res.json());

  return (
    <div className="flex w-full justify-center">
      <ul className="flex w-full flex-col divide-y divide-gray-200 md:flex-row md:flex-wrap dark:divide-gray-700">
        {stocks.map((stock) => (
          <TrackedStocksList session={session} stock={stock} key={stock._id} />
        ))}
      </ul>
    </div>
  );
}
