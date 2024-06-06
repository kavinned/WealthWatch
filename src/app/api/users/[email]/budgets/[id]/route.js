import { NextResponse } from "next/server";
import { connectDB } from "../../../../../../../libs/mongodb";
import { User } from "@/app/(models)/user";

export async function GET(request, { params }) {
	try {
		await connectDB();
		const user = await User.findOne({ email: params.email });
		const budget = user?.budgets?.find(
			(budget) => budget._id.toString() == params.id
		);
		return NextResponse.json(budget, { status: 200 });
	} catch (error) {
		console.log(error);
	}
}

export async function DELETE(request, { params }) {
	try {
		await connectDB();
		const user = await User.findOne({ email: params.email });
		const budget = user?.budgets?.filter(
			(budget) => budget._id.toString() != params.id
		);
		user.budgets = budget;
		await user?.save();
		return NextResponse.json(budget, { status: 200 });
	} catch (error) {
		console.log(error);
	}
}

export async function PUT(request, { params }) {
	const { name, limit } = await request.json();
	try {
		await connectDB();
		const user = await User.findOne({ email: params.email });
		const budget = user?.budgets?.find(
			(budget) => budget._id.toString() == params.id
		);
		budget.name = name;
		budget.limit = limit;
		await user?.save();
		return NextResponse.json(budget, { status: 200 });
	} catch (error) {
		console.log(error);
	}
}
