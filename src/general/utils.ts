import chalk from "chalk";
import {uuid} from "../index";

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

export function randomUUID() {
	return uuid.uuidv4();
}