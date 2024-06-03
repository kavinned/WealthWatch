import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import { connectDB } from "../../../../../libs/mongodb";
import { User } from "@/app/(models)/user";
import bcrypt from "bcrypt";

export const authOptions = {
	providers: [
		Credentials({
			name: "credentials",
			credentials: {},
			async authorize(credentials) {
				const { email, password } = credentials;
				try {
					await connectDB();
					const user = await User.findOne({ email });
					if (!user) return null;
					const passwordsCheck = await bcrypt.compare(password, user.password);
					if (!passwordsCheck) return null;
					return user;
				} catch (error) {
					console.log(error);
				}
			},
		}),
	],
	session: {
		strategy: "jwt",
		maxAge: 20,
	},
	secret: process.env.NEXTAUTH_SECRET,
	pages: {
		signIn: "/",
	},
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
