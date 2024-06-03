"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { set } from "mongoose";

export default function SignUpForm() {
	const [error, setError] = useState(false);

	const router = useRouter();
	const handleSubmit = async (event) => {
		event.preventDefault();
		setError(false);
		const formData = new FormData(event.currentTarget);
		const name = formData.get("name");
		const email = formData.get("email");
		const password = formData.get("password");
		if (!name || !email || !password) {
			setError(true);
			return;
		}
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
				<input type="text" id="name" name="name" placeholder="name" />
				<label htmlFor="email"> Email: </label>
				<input type="email" id="email" name="email" placeholder="email" />
				<label htmlFor="password"> Password: </label>
				<input
					type="password"
					id="password"
					name="password"
					placeholder="password"
				/>
				<button type="submit">Sign Up</button>
				{error == true && (
					<span className="flex justify-center">
						<p className="field-error">Please enter all fields</p>
					</span>
				)}
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
