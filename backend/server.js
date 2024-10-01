import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

dotenv.config();


import authRoute from "../backend/routes/auth.js";
import messageRoute from "../backend/routes/messageRoute.js";
import usersRoute from "../backend/routes/usersRoute.js";

import main from "./connection.js";

import {app,server} from "../backend/sockets/socket.js";





let PORT=process.env.PORT  ;
let __dirname=path.resolve();


app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoute)
app.use("/api/users",usersRoute);
app.use("/api/messages",messageRoute);

app.use(express.static(path.join(__dirname,"/frontend/build")));

app.get("*",(req,res)=>{
 res.sendFile(path.join(__dirname,"/frontend/build/index.html"));
});



server.listen(PORT,()=>{
    main();
    console.log("server is live on port:"+PORT)
});
