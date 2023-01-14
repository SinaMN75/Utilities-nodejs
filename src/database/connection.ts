import {logOk, mongoose, sequelize} from "../index";
import {Dialect, Sequelize} from "sequelize";

export const connectMongoDB = (uri: string) => {
	mongoose.connect(uri, () => logOk(`${uri} is running`));
};

export const sequelizeDatabase = (host: string, database: string, username: string, password: string, dialect: Dialect): Sequelize => {
	require('sequelize-hierarchy-fork')(Sequelize);
	return new sequelize.Sequelize(database, username, password, {
		host: host,
		dialect: dialect,
	});
};

export function connectToSequelize(host: string, database: string, username: string, password: string, dialect: Dialect) {
	sequelizeDatabase(host, database, username, password, dialect).authenticate()
	                                                        .then(() => console.log(`connected to ${database} DB`))
	                                                        .catch(() => console.log(`connection to ${database} DB failed`));
}