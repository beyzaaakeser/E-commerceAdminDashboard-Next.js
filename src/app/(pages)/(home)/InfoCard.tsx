import React from 'react';
import { InfoItem } from './page';
import Image from 'next/image';

type Props = {
  item: InfoItem;
};

const InfoCard = ({ item }: Props) => {
  return (
    <div className="bg-white rounded-lg p-3 flex justify-between items-center">
      <div className="">
        <h4 className="text-gray-700 whitespace-nowrap text-xs md:text-base">
          {item.label}
        </h4>
        <p className="font-bold text-xl md:text-2xl">{item.value}</p>
      </div>
      <Image src={item.icon} alt="icon" className="size-14" />
    </div>
  );
};

export default InfoCard;