import { NextResponse } from "next/server";
import { User } from "@/app/(models)/user";
import { connectDB } from "../../../../../../libs/mongodb";

export async function GET(req, { params }) {
	await connectDB();
	const user = await User.findOne({ email: params.email });
	const stocks = await user.trackedStocks;
	return NextResponse.json(stocks);
}

export async function POST(request, { params }) {
	await connectDB();
	const { symbol } = await request.json();
	const user = await User.findOne({ email: params.email });
	user?.trackedStocks?.push({ symbol });
	await user?.save();
	return NextResponse.json({ message: "success" }, { status: 201 });
}
