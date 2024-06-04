import mongoose, { Schema } from "mongoose";

const transactionSchema = new Schema(
	{
		amount: { type: Number },
		category: { type: String },
		date: { type: Date },
		description: { type: String },
		type: { type: String },
	},
	{ timestamps: true }
);

export const Transaction =
	mongoose.models.Transaction ||
	mongoose.model("Transaction", transactionSchema);
