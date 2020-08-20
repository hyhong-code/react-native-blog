import createDataContext from "./createDataContext";

const INITIAL_STATE = [{ title: "My post", content: "This is my post", id: 1 }];

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_POST":
      return [
        ...state,
        {
          title: payload.title,
          content: payload.content,
          id: Math.floor(Math.random() * 99999),
        },
      ];
    case "DELETE_POST":
      return state.filter((post) => post.id !== payload);
    case "EDIT_POST":
      const { id, title, content } = payload;
      return state.map((post) =>
        post.id === id ? { id, title, content } : post
      );
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => (title, content, navigateCallback) => {
  dispatch({ type: "ADD_POST", payload: { title, content } });

  if (navigateCallback) {
    navigateCallback();
  }
};

const deleteBlogPost = (dispatch) => (id) => {
  dispatch({ type: "DELETE_POST", payload: id });
};
const editBlogPost = (dispatch) => (id, title, content, navigateCallback) => {
  dispatch({ type: "EDIT_POST", payload: { id, title, content } });

  if (navigateCallback) {
    navigateCallback();
  }
};

export const { Context, Provider } = createDataContext(
  reducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  INITIAL_STATE
);
