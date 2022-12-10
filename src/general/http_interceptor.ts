import {AxiosResponse, Method} from "axios";

const axios = require('axios');

export async function request(method: Method,
                              url: string,
                              body: object | null,
                              headers: any = null,
                              onResponse: (response: any) => any,
                              onError: (error: any) => any) {

	await axios({
		method: method,
		url: url,
        headers: headers,
		data: body,
		responseType: "json",
		withCredentials: false,
	}).then(function (response: AxiosResponse) {
		if (response.status >= 200 || response.status <= 299) onResponse(response.data);
		else onError(response.data);
		console.log(`${method} ${url}`, response.data);
	}).catch(function (response: any) {
		onError(response);
		console.log(`${method} ${url}`, response.data);
	}).then(function () {
		console.log("WTF");
	});

}

export async function httpGet(url: string,
                              headers: any | null,
                              onResponse: (response: any) => any,
                              onError: (response: any) => any) {
	return await request("get",
		url,
		null,
		headers,
		(response: any) => onResponse(response),
		(response: any) => onError(response));
}

export async function httpPost(url: string,
                               body: object | null = null,
                               headers: any | null,
                               onResponse: (response: any) => any,
                               onError: (response: any) => any) {
	return await request("post",
		url,
		body,
		headers,
		(response: any) => onResponse(response),
		(response: any) => onError(response));
}

export async function httpPostMultiPart(url: string,
                                        body: object | null = null,
                                        headers: any | null,
                                        onResponse: (response: any) => any,
                                        onError: (response: any) => any) {
	return await request("post",
		url,
		body,
		headers,
		(response: any) => onResponse(response),
		(response: any) => onError(response));
}

export async function httpPut(url: string,
                              body: object | null = null,
                              headers: any | null,
                              onResponse: (response: any) => any,
                              onError: (response: any) => any) {
	return await request("put",
		url,
		body,
		headers,
		(response: any) => onResponse(response),
		(response: any) => onError(response));
}

export async function httpDelete(url: string,
                                 headers: any | null,
                                 onResponse: (response: any) => any,
                                 onError: (response: any) => any) {
	return await request("delete",
		url,
		null,
		headers,
		(response: any) => onResponse(response),
		(response: any) => onError(response));
}