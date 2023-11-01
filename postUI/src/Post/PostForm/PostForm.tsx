import React from 'react';
import './PostForm.css';
import { PostCard } from '../PostCard/PostCard';
import TextLabel from '../PostLabel/TextLabel';
import { SelectLabel } from '../PostLabel/SelectLabel';
import usePostState from './usePostState';

const categoryOptions = ['Houses', 'Cars'];
const subcategoryOptions = ['For Sale', 'For Rent'];

const PostForm = () => {
  const { 
    author, title, content, category, subcategory, posts, 
    handleUpdate, handleDelete, handleSubmit, errorMessages,
    setAuthor, setTitle, setContent, setCategory, setSubcategory } = usePostState();

  return (
    <div>
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit} className="post-form">
        <div className={errorMessages.length ? 'error-messages' : ''}>
          {errorMessages.map((errorMessage, index) => (
            <div key={index} className="error-message">
              {errorMessage}
            </div>
          ))}
        </div>
        <TextLabel label="Author" value={author} onChange={setAuthor} />
        <TextLabel label="Title" value={title} onChange={setTitle} />
        <TextLabel label="Content" value={content} onChange={setContent} />
        <SelectLabel
          label="Category"
          value={category}
          onChange={setCategory}
          options={categoryOptions}
        />
        <SelectLabel
          label="Subcategory"
          value={subcategory}
          onChange={setSubcategory}
          options={subcategoryOptions}
        />
        <button type="submit">Submit</button>
      </form>
      <div className="submitted-posts">
        <h2>Submitted Posts</h2>
        <PostCard
          posts={posts}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      </div>
    </div>
  );
};

export default PostForm;
