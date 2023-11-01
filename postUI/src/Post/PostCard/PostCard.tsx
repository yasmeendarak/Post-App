import React from 'react';
import './PostCard.css';

export interface PostCardProps {
  handleDelete: (id: string) => void;
  handleUpdate: (id: string) => void;
  posts: any[];
}

export const PostCard: React.FC<PostCardProps> = ({
  handleDelete,
  handleUpdate,
  posts,
}) => {
  return (
    <div>
      {posts.map((post) => (
        <div className="post-card" key={post.id}>
          <div className="card-left">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
          <div className="card-right">
            <p>Author: {post.author}</p>
            <p>Category: {post.category}</p>
            <p>Subcategory: {post.subcategory}</p>
            <div className="post-buttons">
              <button onClick={() => handleDelete(post.id)}>Delete</button>
              <button onClick={() => handleUpdate(post.id)}>Update</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
