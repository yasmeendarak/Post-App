// import React, { useCallback, useReducer, useState } from "react";
// import "./PostForm.css";
// import { PostCard } from "../PostCard/PostCard";
// import { SelectLabel } from "../PostLabel/SelectLabel";
// import { postState, postReducer } from "./postReducer";
// import {TextLabel} from "../PostLabel/TextLabel"
// import {PostContext, PostDispatchContext} from "./PostContext"
// const categoryOptions = ["Houses", "Cars"];

// const subcategoryOptions = ["For Sale", "For Rent"];
// const PostForm = () => {
//   const [state, dispatch] = useReducer(postReducer, postState);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     dispatch({
//       type: "addPost",
//       payload: undefined,
//       id: "",
//       author: "",
//       title: "",
//       content: "",
//       category: "",
//       subcategory: "",
//     });
//   };

//   const handleDelete = (id: string) => {
//     dispatch({
//       type: "deletePost",
//       id,
//       payload: undefined,
//       author: "",
//       title: "",
//       content: "",
//       category: "",
//       subcategory: "",
//     });
//   };

//   const handleUpdate = (id: string) => {
//     dispatch({
//       type: "updatePost",
//       id,
//       payload: undefined,
//       author: "",
//       title: "",
//       content: "",
//       category: "",
//       subcategory: "",
//     });
//   };

//   return (
//     <div>
//       <h2>Create a New Post</h2>


//       <form onSubmit={handleSubmit} className="post-form">
//       <PostContext.Provider value= {state}>
//       <PostDispatchContext.Provider value= {dispatch}>
//         <TextLabel
//           label="Author"
//           value={state.author}
//           type="setAuthor"
//           name="author"
//           // onchange={(e: any) =>
//           //   dispatch({
//           //     id:"",
//           //     type: "setAuthor",
//           //     author: e.target.value,
//           //   })
//           // }
//         />
//         <TextLabel
//           label="Title"
//           value={state.title}
//           type="setTitle"
//           name="title"
//           // onchange={(e: any) =>
//           //   dispatch({
//           //     type: "setTitle",
//           //     title: e.target.value,
//           //     payload: undefined,
//           //     id: "",
//           //   })
//           // }
//         />
//         <TextLabel
//           label="Content"
//           value={state.content}          
//           type="setContent"
//           name="content"
//           // onchange={(e: any) =>
//           //   dispatch({
//           //     type: "setContent",
//           //     content: e.target.value,
//           //     payload: undefined,
//           //     id: ""
//           //   })
//           // }
//         />
//         {/* <SelectLabel
//           label="Category"
//           value={state.category}
//           options={categoryOptions}
//           onChange={(value: any) =>
//             dispatch({
//               type: "setCategory",
//               category: value,
//               payload: undefined,
//               id: "",
//             })
//           }
//         />
//         <SelectLabel
//           label="subcategory"
//           value={state.subcategory}
//           options={subcategoryOptions}
//           onChange={(value: any) =>
//             dispatch({
//               type: "setsubcategory",
//               subcategory: value,
//               payload: undefined,
//               id: ""
//             })
//           }
//         /> */}
//         <button type="submit">Submit</button>      
//         </PostDispatchContext.Provider>
//       </PostContext.Provider>

//       </form>

//       <div className="submitted-posts">
//         <h2>Submitted Posts</h2>
//         <PostCard
//           posts={state.posts}
//           handleDelete={handleDelete}
//           handleUpdate={handleUpdate}
//         />
//       </div>
//     </div>
//   );
// };

// export default PostForm;
