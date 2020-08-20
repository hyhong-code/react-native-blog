import createDataContext from "./createDataContext";

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

const addBlogPost = (dispatch) => () => dispatch({ type: "ADD_POST" });

export const { Context, Provider } = createDataContext(
  reducer,
  { addBlogPost },
  INITIAL_STATE
);
