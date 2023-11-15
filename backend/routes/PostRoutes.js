import { Router } from "express";

import {
    getAllPosts,
    CreatePost,
    UpadetPost,
    DeletePost,
    LikePost
} from "../controllers/PostController.js";

const router = Router();

/**
 * @GET
 * @desc // get all Posts
 * @access public
 */
router.get("/", getAllPosts);

/**
 * @POST
 * @desc // create a new Post
 * @access POST
 */
router.post("/", CreatePost);

/**
 * @PATCH
 * @desc // update a Post
 * @access PATCH
 */
router.patch("/:id", UpadetPost);
/**
 * @DELETE
 * @desc //DELETE a Post
 * @access DELETE
 */
router.delete("/:id", DeletePost);

/**
 * @PATCH
 * @desc //LIKE a Post
 * @access PATCH
 */
router.patch("/likes/:id", LikePost);
export default router;
