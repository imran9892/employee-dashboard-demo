import { useAppSelector } from "../../store/hooks";
import { projectSelector } from "../../store/project-slice";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import classes from "./Projects.module.css";

const Projects = () => {
  const projects = useAppSelector(projectSelector);
  const navigate = useNavigate();

  return (
    <div className={classes.wrapper}>
      <div className={classes.projWrap}>
        {projects.map((proj) => (
          <NavLink
            key={proj.projectId}
            to={`${proj.projectId}`}
            className={({ isActive }) =>
              isActive ? classes.projectTitleActive : classes.projectTitle
            }
          >
            {proj.name}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default Projects;
