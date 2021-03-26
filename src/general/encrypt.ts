import {compare, genSalt, hash} from "bcryptjs";

export function encrypt(value: string, action: Function, error: Function) {
	genSalt(10, (err: Error, salt: string) => {
		hash(value, salt, (e: Error, hash: string) => {
			if (e) error(e);
			else action(hash);
		});
	});
}

export function compareValues(password: string, hash: string, action: Function) {
	compare(password, hash, (err: Error, success: boolean) => {
		if (err) throw err;
		action(success);
	});
}