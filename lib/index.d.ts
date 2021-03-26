/// <reference types="mongoose" />
import express from "express";
export declare function connectMongoDB(uri: string): void;
export declare function encrypt(value: string, action: Function, error: Function): void;
export declare function compareValues(password: string, hash: string, action: Function): void;
export declare function notFound(response: express.Response): void;
export declare const price: import("mongoose").Model<import("./models/price").IPrice, {}>;
//# sourceMappingURL=index.d.ts.map