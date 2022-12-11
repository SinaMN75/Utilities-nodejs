import express, {Express, Router} from "express";
import {cors, dotEnv, helmet, morgan} from "../index";

export function notFound(response: express.Response) {
	response.status(404).json({message: "Not Found"});
	const router: Router = express.Router();
}

export function response(result: any, statusCode: number = 200, message: string = "") {
	return {
		message: message,
		status: statusCode,
		result: result
	};
}

export function setupExpress(app: Express) {
	app.use(express.json());
	app.use(express.urlencoded({extended: false}));
	app.use(cors());
	app.use(express.static("public"));
	app.use(helmet());
	app.use(morgan("dev"));
	dotEnv.config();
}