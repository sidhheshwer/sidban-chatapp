import express from "express";
import protectedRoute from "../middlewear/protectedRoute.js";
import { handleSendMessage,handleGetMessages } from "../controllers/messageControllers.js";
const router=express.Router();

router.get("/:id",protectedRoute,handleGetMessages)
router.post("/send/:id",protectedRoute,handleSendMessage)

export default router;