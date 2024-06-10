import { connectDB } from "../../../../libs/mongodb";
import { User } from "@/app/(models)/user";
import { NextResponse } from "next/server";

export async function GET() {
	try {
		await connectDB();
		const users = await User.find();
		return NextResponse.json(users);
	} catch (error) {
		console.log(error);
	}
}
