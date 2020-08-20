import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

// Reducer
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_POST":
      return [...state, payload];
    case "DELETE_POST":
      return state.filter((post) => post.id !== payload);
    case "EDIT_POST":
      const { id, title, content } = payload;
      return state.map((post) =>
        post.id === id ? { id, title, content } : post
      );
    case "LIST_POSTS":
      return payload;
    default:
      return state;
  }
};

// Actions
const addBlogPost = (dispatch) => async (title, content, navigateCallback) => {
  try {
    const res = await jsonServer.post("/blogPosts", { title, content });
    dispatch({ type: "ADD_POST", payload: res.data });
    if (navigateCallback) {
      navigateCallback();
    }
  } catch (error) {
    console.error(error);
  }
};

const deleteBlogPost = (dispatch) => async (id) => {
  try {
    await jsonServer.delete(`/blogPosts/${id}`);
    dispatch({ type: "DELETE_POST", payload: id });
  } catch (error) {
    console.error(error);
  }
};

const editBlogPost = (dispatch) => async (
  id,
  title,
  content,
  navigateCallback
) => {
  try {
    const res = await jsonServer.put(`/blogPosts/${id}`, { title, content });
    dispatch({ type: "EDIT_POST", payload: { id, ...res.data } });
    if (navigateCallback) {
      navigateCallback();
    }
  } catch (error) {
    console.error(error);
  }
};

const listBlogPosts = (dispatch) => async () => {
  try {
    const res = await jsonServer.get("/blogposts");
    dispatch({ type: "LIST_POSTS", payload: res.data });
  } catch (error) {
    console.error(error);
  }
};

const INITIAL_STATE = [];

export const { Context, Provider } = createDataContext(
  reducer,
  { addBlogPost, deleteBlogPost, editBlogPost, listBlogPosts },
  INITIAL_STATE
);
