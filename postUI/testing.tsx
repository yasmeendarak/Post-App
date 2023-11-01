// import React, { useState } from "react";
// import "./PostForm.css";
// import { v4 as uuid } from "uuid";
// import { PostCard } from "./src/Post/PostCard/PostCard";
// import { TextLabel } from "./src/Post/PostLabel/TextLabel";
// import { SelectLabel } from "./src/Post/PostLabel/SelectLabel";
// import { PostCreatePayload, PostUpdatePayload } from "./src/Post/interface";

// const PostForm = () => {
//   const [author, setAuthor] = useState("");
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [category, setCategory] = useState("Houses");
//   const [subcategory, setsubcategory] = useState("For Sale");
//   const [posts, setPosts] = useState<PostCreatePayload[]>([]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const newPost: PostCreatePayload = {
//       id: uuid(),
//       author,
//       title,
//       content,
//       category,
//       subcategory,
//     };
//     setPosts([...posts, newPost]);
//     setAuthor("");
//     setTitle("");
//     setContent("");
//   };

//   const handleDelete = (id: string) => {
//     const newPosts = posts.filter((post) => post.id !== id);
//     setPosts(newPosts);
//   };

//   const handleUpdate = (id: string) => {
//     const updatedPost: PostUpdatePayload = {
//       id,
//       author,
//       title,
//       content,
//       category,
//       subcategory,
//     };

//     const newPosts = posts.map((post) => (post.id === id ? updatedPost : post));

//     setPosts(newPosts);
//   };

//   return (
//     <div>
//       <h2>Create a New Post</h2>
//       <form onSubmit={handleSubmit} className="post-form">
//         <TextLabel label="Author" value={author} onChange={setAuthor} />
//         <TextLabel label="Title" value={title} onChange={setTitle} />
//         <TextLabel label="Content" value={content} onChange={setContent} />
//         <SelectLabel label="category" value={category} onChange={setCategory} firstOption={"Houses"} secondOption={"Cars"} />
//         <SelectLabel label="subcategory" value={subcategory} onChange={setsubcategory} firstOption={"For Sale"} secondOption={"For Rent"} />
//         <button type="submit">Submit</button>
//       </form>
//       <div className="submitted-posts">
//         <h2>Submitted Posts</h2>
//         <PostCard posts={posts} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
//       </div>
//     </div>
//   );
// };

// export default PostForm;
