"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loading from "@/app/loading";

export default function EditTransactionPage({ params }) {
	const [error, setError] = useState("");
	const [transaction, setTransaction] = useState({
		category: "",
		type: "",
		date: "",
		description: "",
		amount: 0,
	});
	const [loading, setLoading] = useState(false);
	const router = useRouter();
	const { id, tid } = params;
	const { data: session, status } = useSession();

	useEffect(() => {
		if (status === "loading") {
			setLoading(true);
		} else {
			setLoading(false);
		}
	}, [status, router, session?.user?.email]);

	const email = session?.user?.email;
	useEffect(() => {
		async function fetchTransaction() {
			const res = await fetch(
				`/api/users/${email}/budgets/${id}/transactions/${tid}`
			);
			const data = await res?.json();
			const formatDate = data?.date?.slice(0, 10);
			setTransaction({ ...data, date: formatDate });
		}
		fetchTransaction();
	}, [id, tid, email]);

	const handleSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const category = formData.get("category");
		const amount = formData.get("amount");
		const description = formData.get("description");
		const date = formData.get("date");
		const type = formData.get("type");

		if (!category || !amount || !description || !date || !type) {
			setError("Please fill in all fields");
			return;
		}

		try {
			const res = await fetch(
				`/api/users/${email}/budgets/${id}/transactions/${tid}`,
				{
					headers: {
						"Content-Type": "application/json",
					},
					method: "PUT",
					body: JSON.stringify({
						category,
						amount,
						description,
						date,
						type,
					}),
				}
			);
			await res.json();
			router.push(`/budgets/${id}`);
			router.refresh();
		} catch (error) {
			console.log(error);
		}
	};

	if (loading) return <Loading />;

	return (
		<div className="flex justify-center items-center w-screen h-[90vh]">
			<form className="form w-1/3 h-fit" onSubmit={handleSubmit}>
				<label htmlFor="description">Description</label>
				<input
					type="text"
					name="description"
					id="description"
					value={transaction.description}
					onChange={(e) =>
						setTransaction({ ...transaction, description: e.target.value })
					}
				/>
				<label htmlFor="amount">Amount</label>
				<input
					type="number"
					name="amount"
					id="amount"
					value={transaction.amount}
					onChange={(e) =>
						setTransaction({ ...transaction, amount: e.target.value })
					}
				/>
				<label htmlFor="category">Category</label>
				<input
					type="text"
					name="category"
					id="category"
					value={transaction.category}
					onChange={(e) =>
						setTransaction({ ...transaction, category: e.target.value })
					}
				/>
				<label htmlFor="date">Date</label>
				<input
					type="date"
					name="date"
					id="date"
					value={transaction.date}
					onChange={(e) =>
						setTransaction({ ...transaction, date: e.target.value })
					}
				/>
				<label htmlFor="type">Type</label>
				<input
					type="text"
					name="type"
					id="type"
					value={transaction.type}
					onChange={(e) =>
						setTransaction({ ...transaction, type: e.target.value })
					}
				/>
				<button type="submit">Edit</button>
				{error !== "" && (
					<span className="flex justify-center items-center">
						<p className="field-error">{error}</p>
					</span>
				)}
			</form>
		</div>
	);
}
