import { Project, Status, Task } from "../store/store.type";

const { GREEN, RED, YELLOW } = Status;

export const initialProjects: Array<Project> = [
  {
    name: "Project 1",
    id: 1,
    tasks: [
      {
        id: 11,
        name: "This is first task",
        status: RED,
      },
      {
        id: 12,
        name: "This is second task",
        status: YELLOW,
      },
      {
        id: 13,
        name: "This is third task",
        status: GREEN,
      },
    ],
    yellow: 1,
    red: 1,
    green: 1,
  },
  {
    name: "Project 2",
    id: 2,
    tasks: [
      {
        id: 21,
        name: "This is first task",
        status: RED,
      },
      {
        id: 22,
        name: "This is second task",
        status: YELLOW,
      },
      {
        id: 23,
        name: "This is third task",
        status: GREEN,
      },
    ],
    yellow: 1,
    red: 1,
    green: 1,
  },
  {
    name: "Project 3",
    id: 3,
    tasks: [
      {
        id: 31,
        name: "This is first task",
        status: RED,
      },
      {
        id: 32,
        name: "This is second task",
        status: YELLOW,
      },
      {
        id: 33,
        name: "This is third task",
        status: GREEN,
      },
    ],
    yellow: 1,
    red: 1,
    green: 1,
  },
];
