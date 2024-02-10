import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Provider } from "react-redux";
import Dashboard from "./Components/Dashboard/Dashboard.tsx";
import FileManagement from "./Components/FileManagement/FileManagement.tsx";
import { store } from "./store/index.ts";
import Projects from "./Components/Projects/Projects.tsx";
import Project from "./Components/Projects/Project/Project.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Navigate to={"/dashboard"} />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "projects",
        element: <Projects />,
        children: [{ path: ":projectId", element: <Project /> }],
      },
      {
        path: "file-management",
        element: <FileManagement />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
