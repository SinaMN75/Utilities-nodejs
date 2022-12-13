import chalk from "chalk";
import {uuidv1, uuidv4} from "../index";

export function folderName(dirName: string) {
	return dirName.split('/').pop();
}

export function logError(message: string) {
	console.log(chalk.red.bold(message));
}

export function logOk(message: string) {
	console.log(chalk.green.bold(message));
}

export function log(message: string) {
	console.log(message);
}

export function randomUUIDV1() {
	return uuidv1();
}

export function randomUUIDV4() {
	return uuidv4();
}