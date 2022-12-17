import {bcryptjs} from "../index";

export async function encrypt(value: string, salt: any) {
	return await bcryptjs.hash(value, salt);
}

export async function compareValues(hashedValue: string, actualValue: string) {
	return await bcryptjs.compare(actualValue, hashedValue);
}