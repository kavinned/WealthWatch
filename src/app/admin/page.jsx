import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Admin() {
	const session = await getServerSession(authOptions);

	console.log(session);

	if (session?.user?.role !== "admin") {
		return <div>Unauthorized</div>;
	}

	return <div>page</div>;
}
