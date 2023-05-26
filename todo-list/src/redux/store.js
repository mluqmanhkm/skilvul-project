import { configureStore } from "@reduxjs/toolkit";

//reducers
import Todo from "./reducers/Todo";

export default configureStore({
  reducer: {
    Todo,
  },
});
