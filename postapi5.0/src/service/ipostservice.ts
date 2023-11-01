import { CreatePostPayload, CreatePostResponse, GetPostByIdPayload, GetPostByIdResponse, UpdatePostPayload, UpdatePostResponse, DeletePayload, DeleteResponse, GetAllPostsPayload, GetAllPostsResponse, PostResponse } from "./iconnection";

export interface IPostService {
    createPost(payload: CreatePostPayload): Promise<CreatePostResponse >;
    updatePost(payload: UpdatePostPayload): Promise<UpdatePostResponse >;
    getPostById(payload: GetPostByIdPayload):Promise<GetPostByIdResponse >; 
    getAllPosts(payload: GetAllPostsPayload):Promise<PostResponse[] >; 
    deletePost(payload: DeletePayload):Promise<DeleteResponse >; 
};