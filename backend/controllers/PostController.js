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
	const tagsArray = tags.split(",");
	console.log(tagsArray);
    const post = await Post.create({
        title,
        message,
        creator,
        image,
        tagsArray,
    });
    res.status(201).json(post);
});

/**
 * update Post
 * @route PATCH /posts
 * @access public
 */
const UpadetPost = asynchandler(async (req, res) => {
    const body = req.body;
    const { id } = req.params;
    validator(PostSchema, body);
    const existPost = await Post.findById(id);
    if (!existPost) {
        throw new Error("post not exist");
    }
    const post = await Post.findByIdAndUpdate(id, body, { new: true });
    res.status(200).json(post);
});

/**
 * delete Post
 * @route DELETE /posts
 * @access public
 */
const DeletePost = asynchandler(async (req, res) => {
    const { id } = req.params;
    const existPost = await Post.findById(id);
    if (!existPost) {
        throw new Error("Post not exist");
    }
    const post = await Post.findByIdAndDelete(id);
    res.status(200).json(post);
});

/**
 * like Post
 * @route PATCH /posts/like
 * @access public
 */
const LikePost = asynchandler(async (req, res) => {
    const { id } = req.params;
    const existPost = await Post.findById(id);
    if (!existPost) {
        throw new Error("Post not exist");
    }
    const post = await Post.findByIdAndUpdate(
        id,
        { $inc: { like: 1 } },
        { new: true }
    );
    res.status(200).json(post);
});
export { getAllPosts, CreatePost, UpadetPost, DeletePost, LikePost };
