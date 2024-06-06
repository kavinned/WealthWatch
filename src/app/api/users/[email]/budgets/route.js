import { NextResponse } from "next/server";
import { connectDB } from "../../../../../../libs/mongodb";
import { User } from "@/app/(models)/user";

export async function GET(req, { params }) {
	try {
		await connectDB();
		const user = await User?.findOne({ email: params.email });
		const budget = user?.budgets;
		return NextResponse.json(budget, { status: 200 });
	} catch (error) {
		console.log(error);
	}
}

export async function POST(request, { params }) {
	try {
		const { name, limit } = await request.json();
		await connectDB();
		const user = await User.findOne({ email: params.email });
		user?.budgets.push({ name, limit });
		await user?.save();
		return NextResponse.json(user, { status: 201 });
	} catch (error) {
		console.log(error);
	}
}
