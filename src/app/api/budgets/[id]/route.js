import { NextResponse } from "next/server";
import { connectDB } from "../../../../../libs/mongodb";
import { Budget } from "@/app/(models)/budget";

export async function GET(request, { params }) {
	try {
		await connectDB();
		const budget = await Budget.findById(params.id);
		return NextResponse.json(budget, { status: 200 });
	} catch (error) {
		console.log(error);
	}
}

export async function DELETE(request, { params }) {
	try {
		await connectDB();
		const budget = await Budget.findByIdAndDelete(params.id);
		return NextResponse.json(budget, { status: 200 });
	} catch (error) {
		console.log(error);
	}
}

export async function PUT(request, { params }) {
	const { name, limit } = await request.json();
	try {
		await connectDB();
		const budget = await Budget.findByIdAndUpdate(params.id, { name, limit });
		return NextResponse.json(budget, { status: 200 });
	} catch (error) {
		console.log(error);
	}
}
