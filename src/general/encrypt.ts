import {bcryptjs} from "../index";

export async function encrypt(value: string) {
	return await bcryptjs.hash(value, 10);
}

export async function compareValues(hashedValue: string, actualValue: string) {
	return await bcryptjs.compare(actualValue, hashedValue)
}