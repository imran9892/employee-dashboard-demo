import { Project, Status, Task } from "../store/store.type";

const { GREEN, RED, YELLOW } = Status;

export const initialProjects: Array<Project> = [
  {
    name: "Project 1",
    projectId: 1,
    tasks: [
      {
        id: 11,
        name: "This is Task 1 for Project 1",
        status: RED,
      },
      {
        id: 12,
        name: "This is Task 2 for Project 1",
        status: YELLOW,
      },
      {
        id: 13,
        name: "This is Task 3 for Project 1",
        status: GREEN,
      },
      {
        id: 16,
        name: "This is Task 6 for Project 1",
        status: GREEN,
      },
      {
        id: 14,
        name: "This is Task 4 for Project 1",
        status: YELLOW,
      },
      {
        id: 15,
        name: "This is Task 5 for Project 1",
        status: YELLOW,
      },
    ],
    yellow: 3,
    red: 1,
    green: 2,
  },
  {
    name: "Project 2",
    projectId: 2,
    tasks: [
      {
        id: 21,
        name: "This is Task 1 for Project 2",
        status: RED,
      },
      {
        id: 24,
        name: "This is Task 4 for Project 2",
        status: RED,
      },
      {
        id: 25,
        name: "This is Task 5 for Project 2",
        status: RED,
      },
      {
        id: 22,
        name: "This is Task 2 for Project 2",
        status: YELLOW,
      },
      {
        id: 26,
        name: "This is Task 6 for Project 2",
        status: YELLOW,
      },
      {
        id: 23,
        name: "This is Task 3 for Project 2",
        status: GREEN,
      },
    ],
    yellow: 2,
    red: 3,
    green: 1,
  },
  {
    name: "Project 3",
    projectId: 3,
    tasks: [
      {
        id: 31,
        name: "This is Task 1 for Project 3",
        status: RED,
      },
      {
        id: 32,
        name: "This is Task 2 for Project 3",
        status: YELLOW,
      },
      {
        id: 33,
        name: "This is Task 3 for Project 3",
        status: GREEN,
      },
    ],
    yellow: 1,
    red: 1,
    green: 1,
  },
];
