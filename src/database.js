const mongoose = require("mongoose");
const Sequelize = require("sequelize");

function connectMongoose(mongodbURI) {
	mongoose.connect(mongodbURI, {useNewUrlParser: true, useUnifiedTopology: true})
	        .then(() => console.log(`mongodb connected`))
	        .catch(() => console.log("error connecting to mongodb"));
}

var sequelize;

function connectSequelize(database, username, password, dialect, host) {
	sequelize = new Sequelize(database, username, password, {dialect: dialect, host: host});
	sequelize.sync()
	         .then(() => console.log("Sequelize connected"))
	         .catch(() => console.log("Sequelize not connected"));
}

module.exports = {
	connectMongoose,
	sequelize,
	connectSequelize,
};