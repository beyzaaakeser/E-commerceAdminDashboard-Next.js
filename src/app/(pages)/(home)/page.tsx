import React from 'react';
import icon1 from '@/app/assets/images/icon-1.webp';
import icon2 from '@/app/assets/images/icon-2.webp';
import icon3 from '@/app/assets/images/icon-3.webp';
import icon4 from '@/app/assets/images/icon-4.png';
import { StaticImageData } from 'next/image';
import InfoCard from './InfoCard';

export type InfoItem = {
  icon: StaticImageData;
  label: string;
  value: number | string;
};

const Home = () => {
  const cards: InfoItem[] = [
    {
      icon: icon1,
      label: 'Total Users',
      value: 327,
    },
    {
      icon: icon2,
      label: 'Total Orders',
      value: 504,
    },
    {
      icon: icon3,
      label: 'Total Sales',
      value: (142707).toLocaleString() + '$',
    },
    {
      icon: icon4,
      label: 'Amount of Products',
      value: 1428,
    },
  ];
  return (
    <div>
      <h1 className="title">Dashboard</h1>
      <section>
        {cards.map((card, key) => (
          <InfoCard key={key} item={card} />
        ))}
      </section>

      <section>
        <div>grafik</div>
      </section>
    </div>
  );
};

export default Home;
