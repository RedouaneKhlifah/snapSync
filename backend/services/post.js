import Post from "../models/PostModel.js";
import asynchandler from "express-async-handler";

/**
 * @typedef {Object} PostData
 * @property {string} title - The title of the post.
 * @property {string} message - The content or message of the post.
 * @property {string} creator - The creator or author of the post.
 * @property {string} image - The image associated with the post.
 * @property {string[]} tags - An array of tags associated with the post.
 */

/**
 * Creates a new record in the Post model.
 * @async
 * @param {PostData} data - An object containing the data for the new record.
 * @throws {Error} If there's an issue creating the post.
 * @returns {Promise<Document>} A Promise that resolves to the document representing the new post record.
 */
const create = asynchandler(async (data) => {
    const { title, message, creator, image, tags } = data;
    const tagsArray = tags.split(",");
    const post = await Post.create({
        title,
        message,
        creator,
        image,
        tags: tagsArray
    });
    return post;
});

/**
 * update a record in the Post model.
 * @async
 * @param {object} data - An object containing the data for the new record.
 * @param {String} id - The ID of the post.
 * @throws {Error} If there's an issue creating the post.
 * @returns {Promise<Document>} A Promise that resolves to the document representing the new post record.
 */

const update = asynchandler(async (id, data) => {
    return await Post.findByIdAndUpdate(id, data, { new: true });
});

export { create, update };
