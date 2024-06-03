"use client";

import Link from "next/link";
import React from "react";

export default function SignUpForm() {
	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const name = formData.get("name");
		const email = formData.get("email");
		const password = formData.get("password");

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
