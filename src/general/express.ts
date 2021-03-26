import {Response} from "express-serve-static-core";

export function notFound(response: Response) {
	response.status(404).json({message: "Not Found"});
}