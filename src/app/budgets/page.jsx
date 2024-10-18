import React from "react";
import BudgetList from "../(components)/BudgetList";
import Link from "next/link";
import { getServerSession } from "next-auth";
async function fetchBudgets(email) {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/users/${email}/budgets`,
    {
      cache: "no-store",
    },
  );
  if (!res) {
    return [];
  }
  return res?.json();
}

export default async function Budgets() {
  const session = await getServerSession();
  const budgets = await fetchBudgets(session?.user?.email);

  return (
    <div className="flex h-[calc(100dvh-7dvh)] w-full flex-col items-center">
      <span className="flex h-3 w-full flex-row justify-end">
        <Link
          href="/budgets/new"
          className="nav-btn mr-5 mt-10 bg-zinc-900 text-xs"
        >
          Add a new budget
        </Link>
      </span>
      <ul className="mb-5 mt-10 w-full space-y-4 divide-y divide-gray-500 md:w-[50rem] md:max-w-[90dvw]">
        {budgets.map((budget) => (
          <BudgetList key={budget._id} budget={budget} session={session} />
        ))}
      </ul>
    </div>
  );
}
