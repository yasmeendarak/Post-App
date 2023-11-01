import { PostResponse, formatMongoPost, formatMongoPosts, formatPost, formatPosts } from "../dtoFormatter";

import { CreatePostPayload, CreatePostResponse, GetPostByIdPayload, GetPostByIdResponse, UpdatePostPayload, UpdatePostResponse, DeletePayload, DeleteResponse, GetAllPostsPayload, GetAllPostsResponse } from "./iconnection";
import { IPostService } from "./ipostservice";
import Post from "../mongoDBModel/postModel";
// const Post = require("../mongoDBModel/postModel");

export class PostServiceMongo implements IPostService {

    async getAllPosts(payload: GetAllPostsPayload): Promise<PostResponse[]> {
        const posts: any = await Post.find();
        const formattedPosts: PostResponse[] = formatMongoPosts(posts);

        return formattedPosts;
    }
    
    async deletePost(payload: DeletePayload): Promise<DeleteResponse> {
        const postId = payload.id;
        await Post.findByIdAndDelete(postId);

        return { success: true, message: "Post deleted successfully" };
    }


    async createPost(payload: CreatePostPayload): Promise<CreatePostResponse> {
        const post = await Post.create(payload);
        const formattedPost: PostResponse = formatMongoPost(post);

        return formattedPost;
    }

    async updatePost(payload: UpdatePostPayload): Promise<UpdatePostResponse> {
        
        const postId = payload.id;
        const post = await Post.findByIdAndUpdate(postId, payload, {
            new: true, 
        });
        const formattedPost: PostResponse = formatMongoPost(post);

        return formattedPost;
    }

    async getPostById(payload: GetPostByIdPayload): Promise<GetPostByIdResponse> {
        const postId = payload.id;
        const post = await Post.findById(postId);
        const formattedPost: PostResponse = formatMongoPost(post);

        return formattedPost;
    }

}