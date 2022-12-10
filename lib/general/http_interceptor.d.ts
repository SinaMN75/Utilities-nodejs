import { Method } from "axios";
export declare function request(method: Method, url: string, body: object | null, headers?: any): Promise<any>;
export declare function httpGet(url: string, headers: any | null): Promise<any>;
export declare function httpPost(url: string, body: object | null | undefined, headers: any | null): Promise<any>;
export declare function httpPut(url: string, body: object | null | undefined, headers: any | null): Promise<any>;
export declare function httpDelete(url: string, headers: any | null): Promise<any>;
//# sourceMappingURL=http_interceptor.d.ts.map