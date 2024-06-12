"use client";

import React, { useEffect, useState } from "react";
import Unauthorized from "../(components)/Unauthorized";
import UsersList from "../(components)/UsersList";
import { useSession } from "next-auth/react";

export default function Admin() {
	const [users, setUsers] = useState([]);
	const { data: session } = useSession();

	console.log(session);

	useEffect(() => {
		async function fetchUsers() {
			const res = await fetch(`/api/users`, {
				cache: "no-store",
			});
			const data = await res?.json();
			setUsers(data);
		}
		fetchUsers();
	}, []);

	if (session?.user?.role !== "admin") {
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
