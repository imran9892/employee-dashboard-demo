import React from "react";
import "chartjs-adapter-moment";
import { Line, Pie } from "react-chartjs-2";
import "chart.js/auto";
import classes from "./Dashboard.module.css";

// ChartJS.register(
//   TimeScale,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   PieController,
//   Title,
//   Tooltip,
//   Legend
// );

const Dashboard = () => {
  const options = {
    radius: 0,
    responsive: true,
    maintainAspectRatio: false,
    // scales: {
    //   x: {
    //     grid: {
    //       display: false,
    //     },
    //     //Changing the x-axis label to months
    //     type: "time" as const,
    //     time: {
    //       unit: "month" as const,
    //       tooltipFormat: "DD/MM/YY",
    //     },
    //     ticks: {
    //       color: "black",
    //     },
    //   },
    //   y: {
    //     //Changing y-axis label for more readablilty
    //     ticks: {
    //       beginAtZero: true,
    //       callback: (value: any) => value / 1000000 + "M",
    //       color: "black",
    //     },
    //     grid: {
    //       display: true,
    //     },
    //   },
    // },
    plugins: {
      legend: {
        position: "top" as const,
      },
      //Title of the chart
      title: {
        display: true,
        text: "COVID-19 Cases",
      },
    },
  };

  const chartData = {
    labels: ["Employee1", "Employee2", "Employee3"],
    //Assigning the values from data
    datasets: [
      {
        label: "Cases World-Wide",
        data: ["20", "30", "40"],
        borderColor: "blue",
        backgroundColor: "blue",
      },
    ],
  };
  return (
    <div className={classes.pie}>
      {
        <Pie
          data={{
            labels: ["Employee1", "Employee2", "Employee3"],
            //Assigning the values from data
            datasets: [
              {
                label: "Completed Tasks",
                data: ["20", "10", "65"],
                backgroundColor: [
                  "rgb(255, 99, 132)",
                  "rgb(54, 162, 235)",
                  "rgb(255, 205, 86)",
                ],
                hoverOffset: 10,
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            aspectRatio: 1,
            plugins: {
              legend: { position: "top" },
              title: { display: true, text: "Employee's Tasks" },
            },
          }}
        />
      }
    </div>
  );
};

export default Dashboard;
