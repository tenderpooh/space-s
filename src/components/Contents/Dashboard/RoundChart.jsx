import React from "react";
import { Line } from "react-chartjs-2";
import { lightBlue, deepOrange } from "@material-ui/core/colors";

export default function RoundChart() {
  const data = {
    labels: ["1R", "2R", "3R", "4R", "5R"],
    datasets: [
      {
        label: "라운드 별 매출",
        fill: false,
        lineTension: 0,
        backgroundColor: lightBlue[50],
        borderColor: lightBlue[500],
        borderWidth: 2,
        data: [65, 59, 80, 81, 56],
        pointRadius: 7
      },
      {
        label: "브랜드 가치",
        fill: false,
        lineTension: 0,
        backgroundColor: deepOrange[50],
        borderColor: deepOrange[500],
        borderWidth: 2,
        data: [85, 64, 90, 85, 50],
        pointRadius: 7
      }
    ]
  };

  return (
    <div>
      <Line
        data={data}
        options={{
          title: {
            display: false,
            text: "Average Rainfall per month",
            fontSize: 20
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  stepSize: 20
                }
              }
            ]
          },
          legend: {
            display: true,
            position: "bottom"
          }
        }}
      />
    </div>
  );
}
