import { ObjectId } from "mongoose";

export interface connection {
};
export type CreatePostPayload = {
    id: string; 
    title: string;
    author: string; 
    content: string;
    category: string; 
    subcategory: string; 
};

export type CreatePostResponse = {
    id?: string; 
    title: string;
    author: string; 
    content: string;
    category: string; 
    subcategory: string; 
    __v?: number

};
export type UpdatePostResponse = {
    id?: string; 
    title?: string;
    author: string; 
    content: string;
    category: string; 
    subcategory: string; 
};
export type UpdatePostPayload = {
    id: string; 
    title: string;
    author: string; 
    content: string;
    category: string; 
    subcategory: string; 
};

export type GetPostByIdPayload = {
    id: string; 
};

export type GetPostByIdResponse = {
    id: string; 
    title: string;
    author: string; 
    content: string;
    category: string; 
    subcategory: string; 
};


export type GetAllPostsPayload = {
    id: string; 
    title: string;
    author: string; 
    content: string;
    category: string; 
    subcategory: string; 
};

export type GetAllPostsResponse = {
    id: string; 
    title: string;
    author: string; 
    content: string;
    category: string; 
    subcategory: string; 

};




export type DeletePayload = {
    id: string; 
};

export type DeleteResponse = {
    
};

export interface PostResponse {
    id: number | string;
    title: string;
    author: string;
    content: string;
    category: string;
    subcategory: string;
  }