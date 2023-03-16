require("dotenv").config();

import express from "express";
import config from "config";
import connectToDb from "./utils/connectToDb";
import log from "./utils/logger";
import routes from "./routes";
import deserialiseUser from "./middleware/deserialiseUser";

const app = express();
const PORT = config.get("port");

app.use(express.json());
app.use(deserialiseUser);
app.use(routes);

app.listen(PORT, () => {
  log.info(`App started on port ${PORT}`);

  connectToDb();
});
