import express from "express";
import PostRoutes from "../routes/PostRoutes.js";

const router = express.Router();

router.use("/post", PostRoutes);

export default router;
