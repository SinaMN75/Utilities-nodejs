import express, { Express } from "express";
interface ResponseOptions {
    message: string;
    statusCode: number;
    count: number;
}
export declare function notFound(response: express.Response): void;
export declare function response(result: any, options: ResponseOptions): {
    message: string;
    status: number;
    count: number;
    result: any;
};
export declare function setupExpress(app: Express): void;
export {};
//# sourceMappingURL=express.d.ts.map