import express from "express";
import morgan from "morgan";

import { sendQuote } from "./routers/quote";

const app = express();

app.use(morgan("combined"));
app.get("/", sendQuote);

app.listen(3000);
