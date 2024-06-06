import { NextResponse } from "next/server";
import { TrackedStocks } from "@/app/(models)/trackedStock";

export async function GET() {
	const trackedStocks = await TrackedStocks.find();
	return NextResponse.json(trackedStocks);
}

export async function POST(request) {
	const { symbol, name } = await request.json();
	await TrackedStocks.create({ symbol, name });
	return NextResponse.json({ message: "success" }, { status: 201 });
}
