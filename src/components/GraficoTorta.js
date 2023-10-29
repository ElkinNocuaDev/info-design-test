import React from "react"; 
import { Pie } from "react-chartjs-2"; 

//const labels = ["Tramo 1", "Tramo 2", "Tramo 3", "Tramo 4", "Tramo 5"];

const GraficoTorta = ({ data, labels }) => {
  const dataForChart = {
    labels: labels,
    datasets: [
      {
        label: "Perdidas x Tramo",
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 206, 86)',
          'rgb(75, 192, 192)',
          'rgb(153, 102, 255)',
        ],
        borderColor: 'rgb(0,0,255)',
        data: data, // Usar los datos de pérdidas recibidos por props
      },
    ],
  };

  return (
    <div>
      <Pie data={dataForChart} />
    </div>
  );
};

export default GraficoTorta;

