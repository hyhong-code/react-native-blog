import React, { createContext, useState } from "react";

const BlogContext = createContext();

const INITIAL_STATE = [
  { title: "Blog post 1" },
  { title: "Blog post 2" },
  { title: "Blog post 3" },
];

export const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPost] = useState(INITIAL_STATE);

  const addBlogPost = () => {
    setBlogPost((prev) => [
      ...prev,
      { title: `Blog post ${blogPosts.length + 1}` },
    ]);
  };

  return (
    <BlogContext.Provider value={{ blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
