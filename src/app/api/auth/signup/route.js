import { NextResponse } from "next/server";

export const POST = async (request) => {
	try {
		const { name, email, password } = await request.json();
		return NextResponse.json({ message: "success" }, { status: 201 });
	} catch (error) {
		console.log(error);
	}
};
