import { NextResponse } from "next/server";
import { connectDB } from "../../../../../../libs/mongodb";
import { Budget } from "@/app/(models)/budget";
import { Transaction } from "@/app/(models)/transaction";
export async function POST(request, { params }) {
	try {
		await connectDB();
		const { amount, category, date, description, type } = await request.json();
		const budget = await Budget.findById(params.id);
		const transaction = await Transaction.create({
			amount,
			category,
			date,
			description,
			type,
		});
		budget.transactions.push(transaction);
		await budget.save();
		return NextResponse.json(
			{ message: "Transaction successfully added to budget" },
			{ status: 201 }
		);
	} catch (error) {
		console.log(error);
	}
}

export async function GET(request, { params }) {
	try {
		await connectDB();
		const budget = await Budget.findById(params.id);
		return NextResponse.json(budget.transactions, { status: 200 });
	} catch (error) {
		console.log(error);
	}
}
