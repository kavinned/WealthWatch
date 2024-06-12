export { default } from "next-auth/middleware";

export const config = {
	matcher: [
		"/dashboard",
		"/budgets",
		"/budgets/:id",
		"/budgets/:id/transactions",
		"/budgets/:id/transactions/:tid",
		"/budgets/:id/transactions/:tid/edit",
		"/budgets/new",
		"/stocks",
		"/stocks/search",
		"/admin",
		"/admin/:email",
		"/admin/:email/edit",
	],
};
