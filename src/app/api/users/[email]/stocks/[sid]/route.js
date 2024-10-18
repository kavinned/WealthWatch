import { connectDB } from "../../../../../../../libs/mongodb";
import { User } from "@/app/(models)/user";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    await connectDB();
    const user = await User?.findOne({ email: params.email });
    const stock = user?.trackedStocks?.find(
      (stock) => stock?._id == params.sid,
    );
    return NextResponse.json(stock, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}

export async function DELETE(request, { params }) {
  try {
    await connectDB();
    const user = await User.findOne({ email: params.email });
    const stock = user?.trackedStocks?.filter(
      (stock) => stock?._id != params.sid,
    );
    user.trackedStocks = stock;
    await user?.save();
    return NextResponse.json(user?.trackedStocks, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}
