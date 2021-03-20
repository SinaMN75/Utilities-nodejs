const mongoose = require("mongoose");
const Sequelize = require("sequelize");
const log = require("./log");
const {utilitiesConfig} = require("../config");

function connectMongoose() {
	mongoose.connect(utilitiesConfig.databaseConfig.mongoURL, {useNewUrlParser: true, useUnifiedTopology: true})
	        .then(() => log.success("mongodb connected"))
	        .catch(() => log.error("error connecting to mongodb"));
}

function sequelize() {
	return new Sequelize(utilitiesConfig.databaseConfig.sqlDatabase.database,
	                     utilitiesConfig.databaseConfig.sqlDatabase.username,
	                     utilitiesConfig.databaseConfig.sqlDatabase.password,
	                     {
		                     dialect: utilitiesConfig.databaseConfig.sqlDatabase.dialect,
		                     host: utilitiesConfig.databaseConfig.sqlDatabase.host,
	                     });
}

function connectSequelize(action, error) {
	sequelize().sync()
	           .then(() => {
		           log.success("Sequelize connected");
		           action();
	           })
	           .catch((e) => {
		           log.error(`Sequelize not connected\n${e.message}`);
		           error();
	           });
}

module.exports = {
	mongoose,
	Sequelize,
	sequelize,
	connectMongoose,
	connectSequelize,
};