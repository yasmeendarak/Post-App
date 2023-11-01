import { Post } from "./mySqlModel/postModel"; 

export interface PostResponse {
  id: string;
  title: string;
  author: string;
  content: string;
  category: string;
  subcategory: string;
}

export function formatPost(post: Post): PostResponse {
  return {
    id: post.id.toString(),
    title: post.title,
    author: post.author,
    content: post.content,
    category: post.category,
    subcategory: post.subcategory,
  };
}

export function formatPosts(posts: Post[]): PostResponse[] {
  return posts.map((post) => formatPost(post));
}

export function formatMongoPost(mongoPost: Post): PostResponse {
  return {
    id: mongoPost._id, 
    title: mongoPost.title,
    author: mongoPost.author,
    content: mongoPost.content,
    category: mongoPost.category,
    subcategory: mongoPost.subcategory,
  };
}

export function formatMongoPosts(mongoPosts: Post[]): PostResponse[] {
  return mongoPosts.map((post) => formatMongoPost(post));
}
