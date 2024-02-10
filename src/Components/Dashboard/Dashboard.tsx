import React from "react";
import "chartjs-adapter-moment";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
// import "chart.js/auto";
import classes from "./Dashboard.module.css";
import { useAppSelector } from "../../store/hooks";
import { projectSelector } from "../../store/project-slice";
import { Status } from "../../store/store.type";
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const { GREEN, RED, YELLOW } = Status;

const Dashboard = () => {
  const projects = useAppSelector(projectSelector);

  return (
    <div className={classes.pie}>
      {projects.map((proj) => (
        <Pie
          key={proj.projectId}
          data={{
            labels: [YELLOW, RED, GREEN],
            datasets: [
              {
                label: "Total",
                data: [proj.yellow, proj.red, proj.green],
                backgroundColor: ["#ffcd56", "#ff6384", "#7aeb7a"],
                hoverOffset: 5,
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 1,
            plugins: {
              legend: { position: "top" },
              title: { display: true, text: proj.name },
            },
          }}
        />
      ))}
    </div>
  );
};

export default Dashboard;
