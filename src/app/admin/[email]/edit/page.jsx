"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function EditUserPage({ params }) {
	const [user, setUser] = useState({
		name: "",
		email: "",
		role: "",
	});
	const router = useRouter();

	useEffect(() => {
		async function fetchUser() {
			const res = await fetch(`/api/users/${params.email}`);
			const data = await res?.json();
			setUser(data);
		}
		fetchUser();
	}, [params.email]);

	async function handleSubmit(event) {
		event.preventDefault();
		const { name, email, role } = user;
		const res = await fetch(`/api/users/${params.email}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ name, email, role }),
		});
		await res.json();
		router.push("/admin");
		router.refresh();
	}

	return (
		<div className="flex flex-col items-center justify-center w-screen h-[calc(100vh-7vh)]">
			<form className="form" onSubmit={handleSubmit}>
				<label htmlFor="name">Name:</label>
				<input
					type="text"
					id="name"
					name="name"
					value={user?.name}
					onChange={(e) => setUser({ ...user, name: e.target.value })}
				/>
				<label htmlFor="email">Email:</label>
				<input
					type="text"
					name="email"
					id="email"
					value={user?.email}
					onChange={(e) => setUser({ ...user, email: e.target.value })}
				/>
				<label htmlFor="role">Role:</label>
				<select
					name="role"
					id="role"
					value={user?.role}
					onChange={(e) => setUser({ ...user, role: e.target.value })}
				>
					<option value="admin">Admin</option>
					<option value="user">User</option>
				</select>
				<button type="submit">Edit</button>
			</form>
		</div>
	);
}
