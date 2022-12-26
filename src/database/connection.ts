import {logOk, mongoose, sequelize} from "../index";
import {Dialect, Sequelize} from "sequelize";

export const connectMongoDB = (uri: string) => {
	mongoose.connect(uri, () => logOk(`${uri} is running`));
};

export const sequelizeDatabase = (database: string, username: string, password: string, dialect: Dialect): Sequelize => {
	require('sequelize-hierarchy-fork')(Sequelize);
	return new sequelize.Sequelize(database, username, password, {
		dialect: dialect,
	});
};

export function connectToSequelize(database: string, username: string, password: string, dialect: Dialect) {
	sequelizeDatabase(database, username, password, dialect).authenticate()
	                                                        .then(() => console.log(`connected to ${database} DB`))
	                                                        .catch(() => console.log(`connection to ${database} DB failed`));
}