import { connectDB } from "../../../../../libs/mongodb";
import { User } from "@/app/(models)/user";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
	try {
		await connectDB();
		const deleteUser = await User.deleteOne({ email: params.email });
		return NextResponse.json(deleteUser, { status: 200 });
	} catch (error) {
		console.log(error);
	}
}

export async function PATCH(request, { params }) {
	const { name, email, role } = await request.json();
	try {
		await connectDB();
		const user = await User.findOne({ email: params.email });
		user.name = name || user.name;
		user.role = role || "user";
		user.email = email || user.email;
		await user?.save();
		return NextResponse.json(user, { status: 200 });
	} catch (error) {
		console.log(error);
	}
}
