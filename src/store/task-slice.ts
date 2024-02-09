import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./index";
import { Project, Status, Task } from "./store.type";
import { initialProjects } from "../utils/data";

const { GREEN, RED, YELLOW } = Status;

const initialState: Array<Project> = initialProjects;

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    //Adding New Task Reducer
    addTask: (state, action: PayloadAction<Task & { pId?: React.Key }>) => {
      const { pId } = action.payload;
      const task = { ...action.payload };
      delete task.pId;
      return state.map((proj) => {
        if (proj.id === pId) {
          proj.tasks.push(task);
          switch (task.status) {
            case GREEN:
              proj.green += 1;
              break;
            case RED:
              proj.red += 1;
              break;
            case YELLOW:
              proj.yellow += 1;
              break;
          }
        }
        return proj;
      });
    },
    //Updating Task Reducer
    // updateTask: (state, action: PayloadAction<Task>) => {
    //   const { id } = action.payload;
    //   const index = state.findIndex((task) => id === task.id);
    //   state[index] = action.payload;
    // },
    //Deleting Task Reducer
    deleteTask: (state, action: PayloadAction<React.Key>) => {
      const id = action.payload;
      return state.filter((task) => task.id !== id);
    },
  },
});

export default taskSlice.reducer;
export const taskActions = taskSlice.actions;
export const taskSelector = (state: RootState) => state.taskReducer;
