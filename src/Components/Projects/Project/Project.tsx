import React from "react";
import { useParams } from "react-router-dom";
import classes from "./Project.module.css";
import { useAppSelector } from "../../../store/hooks";
import { projectSelector } from "../../../store/project-slice";
import { Status } from "../../../store/store.type";
import Tasks from "../../Tasks/Tasks";

const { GREEN, RED, YELLOW } = Status;

const Project = () => {
  const params = useParams();
  const project = useAppSelector(projectSelector).find(
    (proj) => proj.projectId === Number(params.projectId)
  )!;

  const progress = project?.tasks.filter((task) => task.status === YELLOW);
  const start = project?.tasks.filter((task) => task.status === RED);
  const complete = project?.tasks.filter((task) => task.status === GREEN);

  return (
    <div className={classes.mainWrap}>
      <div className={classes.section}>
        <div>
          <select className={classes.select}>
            <option value={"employee1"}>Employee 1</option>
          </select>
        </div>
        <div className={classes.profile}>
          <svg
            width="41"
            height="40"
            viewBox="0 0 41 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20.2688" cy="20" r="20" fill="#D9D9D9" />
            <ellipse
              cx="20.2689"
              cy="13.091"
              rx="5.93857"
              ry="6.25455"
              fill="black"
            />
            <path
              d="M20.337 30.3272C26.3688 30.3272 31.2585 36.3922 31.2585 30.3272C31.2585 24.2621 26.3688 19.3453 20.337 19.3453C14.3052 19.3453 9.41553 24.2621 9.41553 30.3272C9.41553 36.3922 14.3052 30.3272 20.337 30.3272Z"
              fill="black"
            />
          </svg>
          <span>Employee Name</span>
        </div>
      </div>
      <div className={classes.section}>
        <div className={classes.statusWrap}>
          <div className={classes.status}>
            <div className={classes.circle}></div>
            <div className={classes.rectangle}></div>
            <div className={classes.circle}></div>
            <div className={classes.rectangle}></div>
            <div className={classes.circle}></div>
          </div>
          <div className={classes.statusText}>
            <p>
              {YELLOW} - {project?.yellow}
            </p>
            <p>
              {RED} - {project?.red}
            </p>
            <p>
              {GREEN} - {project?.green}
            </p>
          </div>
        </div>
        <div className={classes.tasks}>
          <Tasks
            tasks={progress}
            projectId={project.projectId}
            status={GREEN}
            title={YELLOW}
            color="#FCF3C6"
          />
        </div>
      </div>
      <div className={classes.section}>
        <div className={`${classes.tasks} ${classes.start}`}>
          <Tasks
            tasks={start}
            projectId={project.projectId}
            status={YELLOW}
            title={RED}
            color="#FCC6C6"
            addTask={true}
          />
        </div>
        <div className={classes.tasks}>
          <Tasks
            tasks={complete}
            projectId={project.projectId}
            status={null}
            title={GREEN}
            color="#E1FCC6"
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
