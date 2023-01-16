import {logOk, mongoose, sequelize} from "../index";
import {Dialect, Sequelize} from "sequelize";

interface sequelizeSettings {
	host: string,
	database: string,
	username: string,
	password: string,
	dialect: Dialect,
}

export const connectMongoDB = (uri: string) => {
	mongoose.connect(uri, () => logOk(`${uri} is running`));
};

export const sequelizeDatabase = (settings: sequelizeSettings): Sequelize => {
	return new sequelize.Sequelize(settings.database, settings.username, settings.password, {
		host: settings.host,
		dialect: settings.dialect,
	});
};

export function connectToSequelize(settings: sequelizeSettings) {
	sequelizeDatabase(settings).authenticate()
	                           .then(() => console.log(`connected to ${settings.database} DB`))
	                           .catch(() => console.log(`connection to ${settings.database} DB failed`));
}