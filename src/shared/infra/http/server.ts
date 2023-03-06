import bodyParser from "body-parser";
import cors from "cors";
import express from "express";

import { router } from "./routes";

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(router);

app.listen(3333, () => console.log("Server started on 3333"));
