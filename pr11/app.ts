import express from "express";
import bodyParser from "body-parser";
import { router } from "./routes/routes";

const port = 3002;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

router(app);

const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
    console.log(`Server listening on port
    ${server.address().port}`);
    });