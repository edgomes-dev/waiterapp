import path from "node:path";
import express from "express";
import mongoose from "mongoose";

import { router } from "./router";

mongoose
  .connect("mongodb://localhost:27018")
  .then(() => {
    const app = express();

    app.use(
      "/uploads",
      express.static(path.resolve(__dirname, "..", "uploads"))
    );
    app.use(express.json);
    app.use(router);

    app.listen(3001, () => {
      console.log("server is running");
    });
  })
  .catch((err) => console.log(err));
