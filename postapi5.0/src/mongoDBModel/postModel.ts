import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    category: { type: String, required: true },
    subcategory: { type: String, required: true },

}, {
    versionKey: false,
});

const Post = mongoose.model('Post', postSchema);

export default Post;
