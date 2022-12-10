import { Method } from "axios";
export declare function request(method: Method, url: string, body: object | null, headers: any, onResponse: (response: any) => any, onError: (error: any) => any): Promise<void>;
export declare function httpGet(url: string, headers: any | null, onResponse: (response: any) => any, onError: (response: any) => any): Promise<void>;
export declare function httpPost(url: string, body: object | null | undefined, headers: any | null, onResponse: (response: any) => any, onError: (response: any) => any): Promise<void>;
export declare function httpPostMultiPart(url: string, body: object | null | undefined, headers: any | null, onResponse: (response: any) => any, onError: (response: any) => any): Promise<void>;
export declare function httpPut(url: string, body: object | null | undefined, headers: any | null, onResponse: (response: any) => any, onError: (response: any) => any): Promise<void>;
export declare function httpDelete(url: string, headers: any | null, onResponse: (response: any) => any, onError: (response: any) => any): Promise<void>;
//# sourceMappingURL=http_interceptor.d.ts.map