"use client";

import Link from "next/link";
import React from "react";

export default function LoginForm() {
	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const email = formData.get("email");
		const password = formData.get("password");
		console.log({ email, password });
	};

	return (
		<>
			<form onSubmit={handleSubmit} className="auth mb-3">
				<label htmlFor="email">Email</label>
				<input
					type="email"
					id="email"
					name="email"
					placeholder="email"
					required
				/>
				<label htmlFor="password">Password</label>
				<input
					type="password"
					id="password"
					name="password"
					placeholder="password"
					required
				/>
				<button type="submit">Log In</button>
			</form>
			<p className="text-center p-0 m-0">
				No account?{" "}
				<Link className="underline text-blue-700 font-bold" href="/signup">
					Sign Up
				</Link>
			</p>
		</>
	);
}
