import {Method} from "axios";

const axios = require('axios');

export async function request(method: Method, url: string, body: object | null, headers: any = null) {
	return await axios({
		method: method,
		url: url,
		headers: headers,
		data: body,
		responseType: "json",
		withCredentials: false,
	});
}

export async function httpGet(url: string, headers: any | null) {
	return await request("get", url, null, headers);
}

export async function httpPost(url: string, body: object | null = null, headers: any | null) {
	return await request("post", url, body, headers);
}

export async function httpPut(url: string, body: object | null = null, headers: any | null) {
	return await request("put", url, body, headers);
}

export async function httpDelete(url: string, headers: any | null) {
	return await request("delete", url, null, headers);
}