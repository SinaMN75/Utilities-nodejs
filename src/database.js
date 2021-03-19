const mongoose = require("mongoose");
const Sequelize = require("sequelize");
const log = require("./log");

function connectMongoose(mongodbURI) {
	mongoose.connect(mongodbURI, {useNewUrlParser: true, useUnifiedTopology: true})
	        .then(() => log.success("mongodb connected"))
	        .catch(() => log.error("error connecting to mongodb"));
}

let sequelize = new Sequelize("nodeSample", "root", "123456789", {dialect: "mysql", host: "localhost"});

function connectSequelize() {
	sequelize.sync()
	         .then(() => console.log("Sequelize connected"))
	         .catch(() => console.log("Sequelize not connected"));
}

module.exports = {
	mongoose,
	connectMongoose,
	sequelize,
	connectSequelize,
};