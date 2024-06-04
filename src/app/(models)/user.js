import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		budgets: {
			name: { type: String },
			limit: { type: Number },
			transactions: [
				{
					amount: { type: Number },
					category: { type: String },
					date: { type: Date },
					description: { type: String },
					type: { type: String },
				},
			],
		},
		trackedStocks: [
			{
				symbol: { type: String },
				name: { type: String },
				price: { type: Number },
			},
		],
	},
	{ timestamps: true }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
