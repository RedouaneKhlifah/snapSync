import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "please fill the title"]
    },
    message: {
        type: String,
        required: [true, "please fill the message "]
    },
    creator: {
        type: String,
        required: [true, "please fill the creator"]
    },
    image: {
        type: String,
        required: [true, "please add a image"]
    },
	like:{
		type:Number,
		default:0
	},
    tags: [{ type: String, required: [true, "please add a tag"] }]
});

const Post = mongoose.model("post", PostSchema);

export default Post;
