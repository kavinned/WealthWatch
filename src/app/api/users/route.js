import { connectDB } from "../../../../libs/mongodb";
import { User } from "@/app/(models)/user";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET() {
	try {
		await connectDB();
		const users = await User.find({});
		const usersNotAdmin = users.filter((user) => user.role !== "admin");
		return NextResponse.json(usersNotAdmin, { status: 200 });
	} catch (error) {
		console.log(error);
	}
}

export const revalidate = 0;
