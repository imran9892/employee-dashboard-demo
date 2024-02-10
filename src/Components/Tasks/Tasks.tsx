import React, { useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { Status, Task } from "../../store/store.type";
import { projectActions } from "../../store/project-slice";
import classes from "./Tasks.module.css";

const { GREEN, RED, YELLOW } = Status;

const Tasks = (props: {
  tasks: Task[];
  projectId: React.Key;
  status: Status | null;
  title: Status;
  color: string;
  addTask?: boolean;
}) => {
  const { tasks, projectId, status, title, color, addTask } = props;
  const dispatch = useAppDispatch();
  const [showInput, setShowInput] = useState(false);
  const [input, setInput] = useState("");

  const addNewTask = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(
      projectActions.addTask({
        id: Math.floor(Math.random() * 9999),
        name: input,
        status: RED,
        projectId,
      })
    );
    setShowInput(false);
    setInput("");
  };

  return (
    <div className={classes.tasks} style={{ background: color }}>
      <div>
        <h3>{title}</h3>
        <hr />
      </div>
      <div className={classes.taskDetail}>
        {tasks?.map((task) => (
          <p
            className={classes.task}
            key={task.id}
            onClick={() => {
              if (!status) return;
              dispatch(
                projectActions.updateTask({
                  id: task.id,
                  projectId: projectId,
                  status: status,
                })
              );
            }}
          >
            {task.name}
          </p>
        ))}
        {addTask && (
          <div className={classes.add}>
            {!showInput && (
              <button
                className={classes.addButton}
                onClick={() => setShowInput(true)}
              >
                Add Task
              </button>
            )}
            {showInput && (
              <div className={classes.input}>
                <input
                  type="text"
                  placeholder="Task Name"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button
                  onClick={(e) => addNewTask(e)}
                  className={classes.addButton}
                >
                  Add
                </button>
                <button
                  onClick={() => setShowInput(false)}
                  className={classes.cancelButton}
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Tasks;
