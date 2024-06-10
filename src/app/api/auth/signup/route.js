import { NextResponse } from "next/server";
import { connectDB } from "../../../../../libs/mongodb";
import { User } from "@/app/(models)/user";
import bcrypt from "bcrypt";

export const POST = async (request) => {
	try {
		const { name, email, password } = await request.json();
		if (!name || !email || !password) {
			throw new Error("Please fill in all fields");
		}
		const checkExisting = await User.findOne({ email });
		if (checkExisting) {
			return NextResponse.json(
				{ message: "Email address already exists" },
				{ status: 409 }
			);
		}
		const hashedPassword = await bcrypt.hash(password, 5);
		await connectDB();
		await User.create({ name, email, password: hashedPassword });
		return NextResponse.json({ message: "success" }, { status: 201 });
	} catch (error) {
		console.log(error);
	}
};
