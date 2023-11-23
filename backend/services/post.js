import Post from "../models/PostModel.js";
import asynchandler from "express-async-handler";

/**
 * @typedef {Object} PostData
 * @property {string} title - The title of the post.
 * @property {string} message - The content or message of the post.
 * @property {string} creator - The creator or author of the post.
 * @property {string} image - The image associated with the post.
 * @property {string} tags - An array of tags associated with the post.
 */

/**
 * Creates a new record in the Post model.
 * @async
 * @param {PostData} data - An object containing the data for the new record.
 * @throws {Error} If there's an issue creating the post.
 * @returns {Promise<Document>} A Promise that resolves to the document representing the new post record.
 */
const createPost = asynchandler(async (body) => {
    const { tags } = body;
    const tagsArray = tags.split(",");
    const data = { ...body, tags: tagsArray };
    const post = await Post.create(data);
    return post;
});

/**
 * update a record with the specified ID does not exist in the post model.
 * @async
 * @param {String} id - The ID of the post.
 * @param {object} data - An object containing the data for the new record.
 * @throws {Error} If there's an issue creating the post.
 * @returns {Promise<Document>} A Promise that resolves to the document representing the new post record.
 */

const updatePostById = asynchandler(async (id, data) => {
    const { tags } = data;
    if (tags) {
        const tagsArray = tags.split(",");
        data = { ...data, tags: tagsArray };
    }
    const post = await Post.findByIdAndUpdate(id, data, { new: true });
    return post;
});

export { createPost, updatePostById };
