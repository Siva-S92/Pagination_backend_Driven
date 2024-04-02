import mongoose from "mongoose";

const contentSchema = new mongoose.Schema({
    postId: {
        type: Number,
        required: true,
        trim: true,
    },

    id: {
        type: Number,
        required: true,
        trim: true,
    },

    name: {
        type: String,
        required: true,
        trim: true,
    },

    email: {
        type: String,
        required: true,
        trim: true,
    },

    body: {
        type: String,
        required: true,
        trim: true,
    }
})

const Content = mongoose.model("contents", contentSchema)
export {Content}

