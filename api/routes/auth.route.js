import express from "express";
import { google, signin, signup } from "../controllers/auth.controller.js";


const router = express.Router();

router.post("/signup",signup);
router.post("/signin",signin);



export default router;