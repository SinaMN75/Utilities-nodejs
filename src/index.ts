import * as express from "express";

import {router as productRouter} from "./routes/product";

const app: express.Application = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/", productRouter);


app.listen(3000, () => console.log("app running on port 3000"));