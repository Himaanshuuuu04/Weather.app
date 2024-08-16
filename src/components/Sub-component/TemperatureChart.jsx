// src/components/TemperatureChart.jsx
import React, { useRef, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  PointElement
);

const TemperatureChart = ({ temp }) => {
  const chartRef = useRef(null);

  // Data for the chart
  const data = {
    labels: [
      "00",
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
    ], // Truncated for brevity
    datasets: [
      {
        label: "Temperature (°C)",
        data: temp, // Truncated for brevity
        fill: false,
        borderColor: "#ffffff",
        tension: 0.4,
        borderWidth: 2,
      },
    ],
  };

  // Options for the chart
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: true,
      },
      y: {
        display: true,
      },
    },
  };

  useEffect(() => {
    const chartInstance = chartRef.current?.chartInstance;

    // Destroy the previous chart instance if it exists
    if (chartInstance) {
      chartInstance.destroy();
    }

    // Return a cleanup function to destroy the chart instance on component unmount
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return (
    <div className="TemperatureChart">
      <Line data={data} options={options} ref={chartRef} />
    </div>
  );
};

export default TemperatureChart;
