import { Router } from "express";

import { getAllPosts, CreatePost } from "../controllers/PostController.js";

const router = Router();

/**
 * @GET
 * @desc // get all Posts
 * @access public
 */
router.get("/", getAllPosts);

/**
 * @GET
 * @desc // create a new Post
 * @access POST
 */
router.post("/", CreatePost);

export default router;
