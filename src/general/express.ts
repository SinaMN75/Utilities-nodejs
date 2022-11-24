import express, {Router} from "express";

export function notFound(response: express.Response) {
	response.status(404).json({message: "Not Found"});
	const router: Router = express.Router();
}
