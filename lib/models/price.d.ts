import mongoose from "mongoose";
export interface IPrice extends mongoose.Document {
    buyPrice: string;
    sellPrice?: string;
}
export declare const Price: mongoose.Model<IPrice, {}>;
//# sourceMappingURL=price.d.ts.map