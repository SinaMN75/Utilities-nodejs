import express, {Express, Router} from "express";
import {cors, dotEnv, helmet, morgan} from "../index";

interface ResponseOptions {
	message: string;
	statusCode: number;
	count: number;
}

export function notFound(response: express.Response) {
	response.status(404).json({message: "Not Found"});
	const router: Router = express.Router();
}

export function response(result: any, options: ResponseOptions) {
	return {
		message: options.message,
		status: options.statusCode,
		count: options.count,
		result: result,
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