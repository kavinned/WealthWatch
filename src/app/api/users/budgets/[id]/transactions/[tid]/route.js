import { NextResponse } from "next/server";
import { connectDB } from "../../../../../../../../libs/mongodb";
import { User } from "@/app/(models)/user";

export async function GET(request, { params }) {
	try {
		await connectDB();
		const user = await User.findOne({ email: "test@test.com" });
		const budget = user?.budgets?.find(
			(budget) => budget._id.toString() == params.id
		);
		const transaction = budget?.transactions?.find(
			(transaction) => transaction._id.toString() == params.tid
		);
		return NextResponse.json(transaction, { status: 200 });
	} catch (error) {
		console.log(error);
	}
}

export async function DELETE(request, { params }) {
	try {
		await connectDB();
		const user = await User.findOne({ email: "test@test.com" });
		const budget = user?.budgets?.find(
			(budget) => budget._id.toString() == params.id
		);
		const transaction = budget?.transactions?.filter(
			(transaction) => transaction._id.toString() != params.tid
		);
		budget.transactions = transaction;
		await user.save();
		return NextResponse.json(transaction, { status: 200 });
	} catch (error) {
		console.log(error);
	}
}

export async function PUT(request, { params }) {
	const { amount, category, date, description, type } = await request.json();
	try {
		await connectDB();
		const user = await User.findOne({ email: "test@test.com" });
		const budget = user?.budgets?.find(
			(budget) => budget._id.toString() == params.id
		);
		const transaction = budget?.transactions?.find(
			(transaction) => transaction._id.toString() == params.tid
		);
		transaction.amount = amount;
		transaction.category = category;
		transaction.date = date;
		transaction.description = description;
		transaction.type = type;
		await user.save();
		return NextResponse.json(budget, transaction, { status: 200 });
	} catch (error) {
		console.log(error);
	}
}
