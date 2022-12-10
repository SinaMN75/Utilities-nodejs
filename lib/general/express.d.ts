import express, { Express } from "express";
export declare function notFound(response: express.Response): void;
export declare function response(statusCode: number, message: string, result: any): {
    message: string;
    status: number;
    result: any;
};
export declare function setupExpress(app: Express): void;
//# sourceMappingURL=express.d.ts.map