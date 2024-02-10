import classes from "./App.module.css";
import { NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <div className={classes.bodyContainer}>
      {/* Side Bar (Menu) */}
      <div>
        <div className={classes.company}>
          <h1>WorkFlow Tracker</h1>
        </div>
        <div className={classes.navWrapper}>
          <nav className={classes.navBar}>
            <NavLink
              to={"/dashboard"}
              className={({ isActive }) =>
                isActive ? classes.navActive : classes.navNotActive
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to={"/projects"}
              className={({ isActive }) =>
                isActive ? classes.navActive : classes.navNotActive
              }
            >
              Projects
            </NavLink>
            <NavLink
              to={"/file-management"}
              className={({ isActive }) =>
                isActive ? classes.navActive : classes.navNotActive
              }
            >
              Files
            </NavLink>
          </nav>
        </div>
      </div>
      {/* Main Content (Contacts and Chart-Map Side) */}
      <main className={classes.mainContainer}>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
