import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { taskSelector } from "../../store/task-slice";

const Tasks = () => {
  const projects = useAppSelector(taskSelector);
  const dispatch = useAppDispatch();

  return (
    <div>
      {projects.map((proj) => (
        <div>{proj.name}</div>
      ))}
    </div>
  );
};

export default Tasks;
