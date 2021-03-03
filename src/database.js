const mongoose = require("mongoose");
const Sequelize = require("sequelize");

function connectMongoose(mongodbURI) {
	mongoose.connect(mongodbURI, {useNewUrlParser: true, useUnifiedTopology: true})
	        .then(() => console.log(`mongodb connected`))
	        .catch(() => console.log("error connecting to mongodb"));
}

function sequelize(database, username, password, dialect, host) {
	return new Sequelize(database, username, password, {dialect: dialect, host: host});
}

function connectSequelize(database, username, password, dialect, host) {
	sequelize(database, username, password, dialect, host)
		.sync()
		.then(() => console.log("Sequelize connected"))
		.catch(() => console.log("Sequelize not connected"));
}

module.exports = {
	connectMongoose,
	sequelize,
	connectSequelize,
};