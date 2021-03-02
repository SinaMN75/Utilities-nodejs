import * as express from "express";

export const router = express();

router.get("/", ((req: express.Request, res: express.Response) => {
	res.send("hello");
}));