import mongoose from "mongoose";

export interface IPrice extends mongoose.Document {
	buyPrice: string;
	sellPrice?: string;
}

export const Price = mongoose.model<IPrice>("Price", new mongoose.Schema({
	                                                                         buyPrice: {
		                                                                         type: Number,
		                                                                         required: false,
	                                                                         },
	                                                                         sellPrice: {
		                                                                         type: Number,
		                                                                         required: false,
	                                                                         },
                                                                         }));