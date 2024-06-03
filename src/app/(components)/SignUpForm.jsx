"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

export default function SignUpForm() {
	const router = useRouter();
	const handleSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const name = formData.get("name");
		const email = formData.get("email");
		const password = formData.get("password");
		try {
			const res = await fetch("api/auth/signup", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ name, email, password }),
			});
			if (res.ok) {
				router.push("/");
				console.log("signup success");
			}
		} catch (error) {
			console.log(error);
		}

		console.log({ name, email, password });
	};

	return (
		<>
			<form onSubmit={handleSubmit} className="auth mb-3">
				<label htmlFor="name"> Name: </label>
				<input type="text" id="name" name="name" placeholder="name" required />
				<label htmlFor="email"> Email: </label>
				<input
					type="email"
					id="email"
					name="email"
					placeholder="email"
					required
				/>
				<label htmlFor="password"> Password: </label>
				<input
					type="password"
					id="password"
					name="password"
					placeholder="password"
					required
				/>
				<button type="submit">Sign Up</button>
			</form>
			<p>
				Go back to{" "}
				<Link className="underline text-blue-700 font-bold" href="/">
					Login
				</Link>
			</p>
		</>
	);
}
