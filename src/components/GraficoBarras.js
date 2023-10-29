import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

  
  //const labels = ["Tramo 1", "Tramo 2", "Tramo 3", "Tramo 4", "Tramo 5"];

  const GraficoBarras = ({ data, labels }) => {
    const chartData = {
      labels: labels,
      datasets: [
        {
          label: "Consumo",
          backgroundColor: 'rgba(54, 162, 235, 0.6)',
          borderColor: 'rgba(54, 162, 235, 1)',
          data: data.consumo,
        },
        {
          label: "Costo",
          backgroundColor: 'rgb(255, 206, 86)',
          borderColor: 'rgb(255, 206, 86)',
          data: data.costo,
        },
      ],
    };

  return (
    <div>
      <Bar data={chartData} />
    </div>
  );
};

export default GraficoBarras;
