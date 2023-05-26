import { createSlice } from "@reduxjs/toolkit";

export const Todo = createSlice({
  name: "counter",
  initialState: {
    ListTodo: [],
  },

  reducers: {
    addTodoData: (state, action) => {
      //   console.log(action);
      state.ListTodo.push(action.payload);
    },

    deleteTodoData: (state, action) => {
      state.ListTodo = action.payload;
    },

    checkListTodoData: (state, action) => {
      state.ListTodo = action.payload;
    },
  },
});

export const { addTodoData, deleteTodoData, checkListTodoData } = Todo.actions; 

export default Todo.reducer;
