export { default } from "next-auth/middleware";

export const config = {
	matcher: [
		"/dashboard",
		"/budgets",
		"/budgets/:id",
		"/budgets/:id/transactions",
		"/budgets/:id/transactions/:tid",
		"/stocks",
	],
};
