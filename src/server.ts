import express, { Request, Response } from "express";
var app = express();
app.use(express.static("public"));
app.use(express.json());

import cors from "cors";
const corsOptions = {
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

import mongoose from "mongoose";
import casaRoutes from "./routes/casa.routes.js";

const dbUrl = process.env.MONGO_URL || "";
mongoose
  .connect(dbUrl)
  .then(() => {
    console.log("Successfully connected to MongoDB.");
  })
  .catch((err) => {
    console.log("Could not connect to MongoDB.");
    process.exit();
  });

app.use("/api/casa", casaRoutes);

// Create a Server
const PORT: number = parseInt(process.env.PORT || "4000", 10);

const server = app.listen(PORT, () => {
  const addressInfo = server.address();

  if (addressInfo && typeof addressInfo !== "string") {
    console.log(`App in ascolto su http://${addressInfo.address}:${addressInfo.port}`);
  } else {
    console.log(`Server in ascolto sulla porta ${PORT}`);
  }
});
