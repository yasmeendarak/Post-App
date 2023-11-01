import { CreatePostPayload, CreatePostResponse, DeletePayload, DeleteResponse, GetAllPostsPayload, GetAllPostsResponse, GetPostByIdPayload, GetPostByIdResponse, UpdatePostPayload, UpdatePostResponse } from "./iconnection";
import { IPostService } from "./ipostservice";
import { Post } from '../mySqlModel/postModel';
import { PostResponse, formatPost, formatPosts } from "../dtoFormatter";

export class PostServiceMySql implements IPostService {

    async deletePost(payload: DeletePayload): Promise<DeleteResponse> {

        const postId = payload.id;
        const post = await Post.destroy({ where: { id: postId } });

        return post;
    }

    async getAllPosts(payload: GetAllPostsPayload): Promise<PostResponse[]> {

        const posts: Post = await Post.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt'] },
        });
        const formattedPost: PostResponse[] = formatPosts(posts);

        return formattedPost;
    }

    async createPost(payload: CreatePostPayload): Promise<CreatePostResponse> {

        const post = await Post.create(payload);
        const formattedPost: PostResponse = formatPost(post);

        return formattedPost;

    }

    async updatePost(payload: UpdatePostPayload): Promise<UpdatePostResponse> {

        const postId = payload.id;
        const post = await Post.update(payload, {
            where: { id: postId },
        });
    
        return post;
    }
    async getPostById(payload: GetPostByIdPayload): Promise<GetPostByIdResponse> {

        const postId = payload.id;
        const post = await Post.findOne({ where: { id: postId } });
        const formattedPost: PostResponse = formatPost(post);

        return formattedPost;
    }
};
