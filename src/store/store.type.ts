export type Project = {
  projectId: React.Key;
  name: string;
  tasks: Array<Task>;
  yellow: number;
  red: number;
  green: number;
};

export type Task = {
  id: number;
  name: string;
  status: Status;
};

export enum Status {
  YELLOW = "In Progress",
  RED = "Not Started",
  GREEN = "Completed",
}
