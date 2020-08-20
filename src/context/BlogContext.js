import React, { createContext, useReducer } from "react";

const BlogContext = createContext();

const INITIAL_STATE = [
  { title: "Blog post 1" },
  { title: "Blog post 2" },
  { title: "Blog post 3" },
];

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_POST":
      return [...state, { title: `Blog post ${state.length + 1}` }];
    default:
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <BlogContext.Provider value={{ blogPosts, dispatch }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
