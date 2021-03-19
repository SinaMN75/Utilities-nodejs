const chalk = require("chalk");

function error(message) {
	console.log(chalk.red(message));
}

function message(message) {
	console.log(chalk.black(message));
}

function success(message) {
	console.log(chalk.green(message));
}

module.exports = {
	error,
	message,
	success,
};