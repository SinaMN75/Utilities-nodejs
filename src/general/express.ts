import express from "express";

export default class ExpressExtension {
	notFound(response: express.Response) {
		response.status(404).json({message: "Not Found"});
	}
}