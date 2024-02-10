import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./project-slice";

export const store = configureStore({
  reducer: { projectReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
