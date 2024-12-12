'use client';

import { Order } from '@/app/types';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

type Props = {
  data: Order[];
};

const Graphic = ({ data }: Props) => {
  const graphData = {
    labels: data.map((i) => i.order_date),
    datasets: [
      {
        label: 'Sale price',
        data: data.map((i) => i.total_price),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return <Line data={graphData} options={{ responsive: true }} />;
};

export default Graphic;
