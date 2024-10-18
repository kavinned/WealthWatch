import { NextResponse } from "next/server";
import { User } from "@/app/(models)/user";
import { connectDB } from "../../../../../../libs/mongodb";

export async function GET(req, { params }) {
  try {
    await connectDB();
    const user = await User?.findOne({ email: params.email });
    const stocks = user?.trackedStocks;
    return NextResponse.json(stocks, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}

export async function POST(request, { params }) {
  await connectDB();
  const { symbol } = await request.json();
  const user = await User.findOne({ email: params.email });
  user?.trackedStocks?.push({ symbol });
  await user?.save();
  return NextResponse.json({ message: "success" }, { status: 201 });
}
