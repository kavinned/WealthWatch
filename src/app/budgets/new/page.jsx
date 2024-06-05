"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
export default function AddBudgetPage() {
	const [error, setError] = useState("");

	const router = useRouter();

	const handleSubmit = async (event) => {
		event.preventDefault();
		setError("");
		const formData = new FormData(event.currentTarget);
		const { name, limit } = Object.fromEntries(formData.entries());
		if (!name || !limit) {
			setError("Please enter all fields");
			return;
		}
		console.log({ name, limit });
		try {
			const res = await fetch("/api/budgets", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ name, limit }),
			});
			await res.json();
			router.push("/budgets");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="flex flex-col items-center justify-center w-screen h-[90vh]">
			<form className="auth" onSubmit={handleSubmit}>
				<h1 className="text-center text-slate-800 font-bold">
					Add a new budget
				</h1>
				<label htmlFor="name">Name</label>
				<input type="text" name="name" placeholder="name" />
				<label htmlFor="limit">Limit</label>
				<input type="number" name="limit" placeholder="limit" />
				<button type="submit">Create</button>
				{error !== "" && (
					<span className="flex justify-center">
						<p className="field-error">{error}</p>
					</span>
				)}
			</form>
		</div>
	);
}
