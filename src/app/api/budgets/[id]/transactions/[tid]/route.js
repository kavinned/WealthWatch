import { NextResponse } from "next/server";
import { connectDB } from "../../../../../../../libs/mongodb";
import { Budget } from "@/app/(models)/budget";
import { Transaction } from "@/app/(models)/transaction";

export async function GET(request, { params }) {
	try {
		await connectDB();
		const transaction = await Transaction.findById(params.tid);
		return NextResponse.json(transaction, { status: 200 });
	} catch (error) {
		console.log(error);
	}
}

export async function DELETE(request, { params }) {
	try {
		await connectDB();
		const budget = await Budget.findById(params.id);
		budget.transactions = budget.transactions.filter(
			(transaction) => transaction._id.toString() !== params.tid
		);
		await budget.save();
		await Transaction.findByIdAndDelete(params.tid);
		return NextResponse.json(budget, { status: 200 });
	} catch (error) {
		console.log(error);
	}
}

export async function PUT(request, { params }) {
	const { amount, category, date, description, type } = await request.json();
	try {
		await connectDB();
		const budget = await Budget.findById(params.id);
		const index = budget?.transactions.findIndex(
			(transaction) => transaction._id.toString() === params.tid
		);
		budget.transactions[index] = {
			...budget.transactions[index],
			amount,
			category,
			date,
			description,
			type,
			_id: params.tid,
		};
		await budget.save();
		const transaction = await Transaction.findByIdAndUpdate(params.tid, {
			amount,
			category,
			date,
			description,
			type,
		});
		return NextResponse.json(budget, transaction, { status: 200 });
	} catch (error) {
		console.log(error);
	}
}
