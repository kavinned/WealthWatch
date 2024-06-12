import { connectDB } from "../../../../../libs/mongodb";
import { User } from "@/app/(models)/user";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
	try {
		await connectDB();
		const user = await User.deleteOne({ email: params.email });
		return NextResponse.json(user, { status: 200 });
	} catch (error) {
		console.log(error);
	}
}

export async function PUT(request, { params }) {
	const { name, email, role } = await request.json();
	if (!name || !email || !role) {
		throw new Error("Please fill in all fields");
	}
	try {
		await connectDB();
		const user = await User.findOne({ email: params.email });
		user.name = name;
		user.role = role;
		user.email = email;
		await user?.save();
		return NextResponse.json(user, { status: 200 });
	} catch (error) {
		console.log(error);
	}
}

export async function GET(request, { params }) {
	try {
		await connectDB();
		const user = await User.findOne({ email: params.email });
		return NextResponse.json(user, { status: 200 });
	} catch (error) {
		console.log(error);
	}
}

export const revalidate = 0;
