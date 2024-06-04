import mongoose, { Schema } from "mongoose";

const budgetSchema = new Schema(
	{
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
	{ timestamps: true }
);

export const Budget =
	mongoose.models.Budget || mongoose.model("Budget", budgetSchema);
