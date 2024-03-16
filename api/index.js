import express from "express";
import { PORT } from "./src/config/index.js";
import dbConnect from "./src/database/index.js";
import register from "./src/controllers/register.controller.js";
import cors from "cors";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.json({
        "msg": "port is working"
    });
});

// Register controller route
app.use("/api", register);

const port = PORT;
dbConnect();

// Start server
app.listen(port, () => {
    console.log(`App is listening on the port ${port}`);
});
