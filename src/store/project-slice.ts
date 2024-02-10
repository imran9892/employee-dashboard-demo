import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./index";
import { Project, Status, Task } from "./store.type";
import { initialProjects } from "../utils/data";

const { GREEN, RED, YELLOW } = Status;

const initialState: Array<Project> = initialProjects;

const projectSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    //Adding New Task Reducer
    addTask: (
      state,
      action: PayloadAction<Task & { projectId?: React.Key }>
    ) => {
      const { projectId } = action.payload;
      const task = { ...action.payload };
      delete task.projectId;
      const index = state.findIndex((proj) => proj.projectId === projectId);
      const proj = { ...state[index] };
      proj.tasks.push(task);
      proj.red += 1;
      state[index] = proj;
    },
    //Updating Task Reducer
    updateTask: (
      state,
      action: PayloadAction<{
        id: number;
        projectId: React.Key;
        status: Status;
      }>
    ) => {
      const task = action.payload;
      const { id, projectId, status } = task;
      const index = state.findIndex((proj) => proj.projectId === projectId);
      const proj = { ...state[index] };
      proj.tasks = proj.tasks.map((task) =>
        task.id === id ? { ...task, status: status } : task
      );
      switch (status) {
        case GREEN:
          proj.green += 1;
          proj.yellow -= 1;
          break;
        case RED:
          proj.red += 1;
          break;
        case YELLOW:
          proj.yellow += 1;
          proj.red -= 1;
          break;
      }
      state[index] = proj;
    },
    //Deleting Task Reducer
    // deleteTask: (state, action: PayloadAction<React.Key>) => {
    //   const id = action.payload;
    //   return state.filter((task) => task.projectId !== id);
    // },
  },
});

export default projectSlice.reducer;
export const projectActions = projectSlice.actions;
export const projectSelector = (state: RootState) => state.projectReducer;
