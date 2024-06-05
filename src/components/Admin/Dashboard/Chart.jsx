import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend,
} from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend
);

export function LineChart() {
  const labels = getLastYearMonth();
  const option = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Yearly Views',
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'Views',
        data: [120, 340, 560, 650, 910, 350, 680, 390, 400, 320, 740, 960],
        borderColor: '#E8E9ED',
        backgroundColor: '#E8E9ED',
      },
    ],
  };

  return <Line option={option} data={data} />;
}

export function DoughnutChart() {
  const data = {
    labels: ['Subscribed', 'Not Subscribed'],
    datasets: [
      {
        label: 'Views',
        data: [35, 13],
        borderColor: ['#FF7B93', '#000000'],
        backgroundColor: ['rgba(255, 123, 147, 0.5)', 'rgba(0, 0, 0, 0.5)'],
      },
    ],
  };
  return <Doughnut data={data} />;
}

function getLastYearMonth() {
  const labels = [];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const currentMonth = new Date().getMonth();
  for (let i = 0; i <= currentMonth; i++) {
    labels.push(months[i]);
  }

  for (let i = 11; i > currentMonth; i--) {
    labels.unshift(months[i]);
  }

  return labels;
}
