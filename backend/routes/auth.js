import express from "express";
import {handleSignin,handleLogin,handleLogout} from "../controllers/authControllers.js";

let router=express.Router();

router.post("/signin",handleSignin)
router.post("/login",handleLogin)
router.post("/logout",handleLogout)

export default router;