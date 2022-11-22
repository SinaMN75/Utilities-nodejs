import chalk from "chalk";

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
