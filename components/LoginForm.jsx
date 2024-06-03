"use client";

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
		<form onSubmit={handleSubmit} className="auth">
			<label htmlFor="email">Email</label>
			<input type="email" id="email" name="email" />
			<label htmlFor="password">Password</label>
			<input type="password" id="password" name="password" />
			<button type="submit">Submit</button>
		</form>
	);
}
