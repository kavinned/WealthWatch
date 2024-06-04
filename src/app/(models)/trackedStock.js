import mongoose, { Schema } from "mongoose";

const trackedStocksSchema = new Schema(
	{
		symbol: { type: String },
		name: { type: String },
		price: { type: Number },
	},
	{ timestamps: true }
);

export const TrackedStocks =
	mongoose.models.TrackedStocks ||
	mongoose.model("TrackedStocks", trackedStocksSchema);
