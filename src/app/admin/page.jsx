import React from "react";
import Unauthorized from "../(components)/Unauthorized";
import UsersList from "../(components)/UsersList";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Admin() {
  const session = await getServerSession(authOptions);

  const users = await fetch(`${process.env.NEXTAUTH_URL}/api/users`, {
    cache: "no-store",
    revalidate: 0,
  }).then((res) => res.json());

  if (session?.user?.role !== "admin") {
    return <Unauthorized />;
  }

  return (
    <div className="flex h-[100vh-7dvh] w-full flex-col items-center justify-center">
      <ul className="w-[50rem] max-w-[90dvw] space-y-4 divide-y divide-gray-500 p-5">
        {users.map((user) => (
          <UsersList key={user._id} user={user} />
        ))}
      </ul>
    </div>
  );
}
