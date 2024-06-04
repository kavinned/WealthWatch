export { default } from "next-auth/middleware";

export const config = {
	matcher: [
		// Apply middleware to all routes except "/", "/signup", and their subpaths
		"/((?!signup|$).*)",
	],
};
