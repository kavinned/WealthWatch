import { connectDB } from "../../../../libs/mongodb";
import { User } from "@/app/(models)/user";
import { NextResponse } from "next/server";

export async function GET() {
	try {
		await connectDB();
		const users = await User.find({});
		return NextResponse.json(users, { status: 200 });
	} catch (error) {
		console.log(error);
	}
}

export const revalidate = 0;
