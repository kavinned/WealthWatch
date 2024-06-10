import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Unauthorized from "../(components)/Unauthorized";
import UsersList from "../(components)/UsersList";

export default async function Admin() {
	const session = await getServerSession(authOptions);
	const users = await fetch(`${process.env.NEXTAUTH_URL}/api/users`, {
		cache: "no-store",
	}).then((res) => res.json());

	console.log(users);

	if (session?.user.role !== "admin") {
		return <Unauthorized />;
	}

	return (
		<div className="flex flex-col items-center justify-center w-screen h-[100vh-7vh]">
			<ul className="max-w-[90vw] w-[50rem] space-y-4 divide-y divide-gray-500 p-5">
				{users.map((user) => (
					<UsersList key={user._id} user={user} />
				))}
			</ul>
		</div>
	);
}
