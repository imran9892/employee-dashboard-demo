import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./task-slice";

export const store = configureStore({
  reducer: { taskReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
