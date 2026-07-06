// require("dotenv").config({path: "./.env"});

import dotenv from "dotenv";
import connectDB from "./db/db.js";


dotenv.config({ path: "./.env" });


connetDB()
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log("MONGO db connecton error:", error);
})