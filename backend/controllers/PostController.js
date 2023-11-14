import Post from "../models/PostModel.js";
import asynchandler from "express-async-handler";
import { validator, PostSchema } from "../validator/JoiSchemas.js";

/**
 * Get all Posts
 * @route GET /post
 * @access public
 */

const getAllPosts = asynchandler(async (req, res) => {
    const Posts = await Post.find();
    res.json(Posts);
});

/**
 * create new Post
 * @route POST /posts
 * @access public
 */
const CreatePost = asynchandler(async (req, res) => {
    validator(PostSchema, req.body);

    const { title, message, creator, image, tags } = req.body;
    console.log(title);
    const post = await Post.create({ title, message, creator, image, tags });
    res.status(201).json(post);
});

/**
 * update existing Post
 * @route Patch /posts
 * @access public
 */
const UpadetPost = asynchandler(async (req, res) => {
    validator(PostSchema, req.body);
});

const DeletePost = asynchandler(async (req, res) => {});
export { getAllPosts, CreatePost, UpadetPost, DeletePost };
