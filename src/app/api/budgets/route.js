import { NextResponse } from "next/server";
import { connectDB } from "../../../../libs/mongodb";
import { Budget } from "@/app/(models)/budget";

export async function GET() {
	try {
		await connectDB();
		const budget = await Budget.find();
		return NextResponse.json(budget, { status: 200 });
	} catch (error) {
		console.log(error);
	}
}

export async function POST(request) {
	try {
		const { name, limit } = await request.json();
		await connectDB();
		const budget = await Budget.create({ name, limit });
		return NextResponse.json(budget, { status: 201 });
	} catch (error) {
		console.log(error);
	}
}
