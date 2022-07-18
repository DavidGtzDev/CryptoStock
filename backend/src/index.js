import express from "express";
import morgan from "morgan";
import {share_router} from "./routes/MyShare.routes.js"
import { db } from "./database.js";

let app = express();

app.set("port", process.env.PORT || 5000)
app.use(express.json())
app.use("/api/my_share",share_router)

app.use(morgan("dev"))

app.listen(app.get("port"), () => {
    console.log("Server on port", app.get("port"))
})

