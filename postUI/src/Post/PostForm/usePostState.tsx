import { useState, useCallback } from 'react';
import { createPost, updatePost, deletePost } from '../../apiConnect';
import { PostCreatePayload, PostUpdatePayload } from '../interface';

const usePostState = () => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('Houses');
  const [subcategory, setSubcategory] = useState('For Sale');
  const [posts, setPosts] = useState<PostCreatePayload[]>([]);
  const [errorMessages, setErrorMessages] = useState<string[]>([]);

  const resetFields = () => {
    setAuthor('');
    setTitle('');
    setContent('');
  };

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      const newPost: PostCreatePayload = {
        author,
        title,
        content,
        category,
        subcategory,
      };

      try {
        const createdPost = await createPost(newPost);
        if (createdPost.errors) {
          setErrorMessages(createdPost.errors);
        } else {
          setPosts([createdPost, ...posts]);
          resetFields();
          setErrorMessages([]);
        }
      } catch (error) {
        if (error.response) {
          const errorResponse = error.response.data;
          if (errorResponse.errors) {
            setErrorMessages(errorResponse.errors);
          }
        } else {
          console.error('Error creating post:', error);
        }
      }
    },
    [author, title, content, category, subcategory, posts]
  );

  const handleDelete = useCallback(async (id: string) => {
    try {
      await deletePost(id);
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  }, []);

  const handleUpdate = useCallback(
    async (id: string) => {
      const updatedPost: PostUpdatePayload = {
        id,
        author,
        title,
        content,
        category,
        subcategory,
      };

      try {
        await updatePost(id, updatedPost);
        const updatedPosts = posts.map((post) =>
          post.id === id ? updatedPost : post
        );
        setPosts(updatedPosts);
        resetFields();
      } catch (error) {
        if (error.response) {
          const errorResponse = error.response.data;
          if (errorResponse.errors) {
            setErrorMessages(errorResponse.errors);
          }
        } else {
          console.error('Error updating post:', error);
        }
      }
    },
    [author, title, content, category, subcategory, posts]
  );

  return {
    author,
    title,
    content,
    category,
    subcategory,
    posts,
    handleDelete,
    handleSubmit,
    handleUpdate,
    errorMessages,
    setAuthor,
    setTitle,
    setContent,
    setCategory,
    setSubcategory,
    setErrorMessages,
  };
};

export default usePostState;
