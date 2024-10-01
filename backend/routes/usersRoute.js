import express from "express";
import protectedRoute from "../middlewear/protectedRoute.js";
import handleGetAllUsers from "../controllers/userControllers.js";
const router=express.Router();

router.get("/",protectedRoute,handleGetAllUsers)
export default router;