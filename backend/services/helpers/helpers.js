import asynchandler from "express-async-handler";

/**
 * Throws an error if a record with the specified ID does not exist in the given model.
 * @async
 * @param {Model<Document>} Model - The Mongoose model.
 * @param {string} id - The ID of the record to check.
 * @throws {Error} If the record with the given ID is not found.
 * @returns {Promise<void>} A Promise that resolves if the record exists.
 */
const CheckRecord = asynchandler(async (Model, id) => {
    const existRecord = await Model.findById(id);
    if (!existRecord) {
        throw new Error("record not exist");
    }
});

export { CheckRecord };
