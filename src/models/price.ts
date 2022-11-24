import mongoose from "mongoose";

export interface IPrice extends mongoose.Document {
	buyPrice: string;
	sellPrice?: string;
}

export const Price = mongoose.model<IPrice>("Price", new mongoose.Schema({
	                                                                         buyPrice: {
		                                                                         type: String,
		                                                                         required: false,
	                                                                         },
	                                                                         sellPrice: {
		                                                                         type: String,
		                                                                         required: false,
	                                                                         },
                                                                         }));