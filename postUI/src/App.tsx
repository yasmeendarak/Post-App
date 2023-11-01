import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 import PostForm from './Post/PostForm/PostForm';

function App() {
  return (
    <div className="App">
      <nav className="nav-bar">
        <h1>Post App</h1>
      </nav>
      <div className="post-container">
        <Router>
          <Routes>
            <Route path="/posts" element={<PostForm />} />

          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
