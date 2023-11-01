import axios from "axios";
import { PostCreatePayload } from "./Post/interface";
const apiUrl = "http://localhost:3004";

export const createPost = async (postData: PostCreatePayload) => {
  const response = await axios.post(`${apiUrl}/posts`, postData);

  return response.data;
};

export const updatePost = async (postId: any, postData: any) => {
  const response = await axios.put(`${apiUrl}/posts/${postId}`, postData);
  console.log({ postId });

  return response.data;
};

export const getAllPosts = async () => {
  const response = await axios.get(`${apiUrl}/posts`);
  console.log({ response });

  return response.data;
};

export const deletePost = async (postId: any) => {
  const response = await axios.delete(`${apiUrl}/posts/${postId}`);

  return response.data;
};
