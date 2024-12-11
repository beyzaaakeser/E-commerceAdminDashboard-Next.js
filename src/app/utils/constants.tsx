import { TiHome } from 'react-icons/ti';
import {
  FaUsers,
  FaHeart,
  FaBox,
  FaChartArea,
  FaDiceD6,
  FaCog,
} from 'react-icons/fa';
import { IoIosPricetags } from 'react-icons/io';

export const sections = [
  {
    icon: <TiHome />,
    name: 'Home',
    url: '/',
  },

  {
    icon: <FaDiceD6 />,
    name: 'Products',
    url: '/products',
  },

  {
    icon: <FaUsers />,
    name: 'Users',
    url: '/users',
  },
  {
    icon: <IoIosPricetags />,
    name: 'Orders',
    url: '/orders',
  },

  {
    icon: <FaChartArea />,
    name: 'Graphics',
  },
  {
    icon: <FaHeart />,
    name: 'Favorites',
  },
  {
    icon: <FaBox />,
    name: 'Inventory',
  },
  {
    icon: <FaCog />,
    name: 'Settings',
  },
];

export const inputs = [
  {
    label: 'Name',
    name: 'name',
  },
  {
    label: 'Brand',
    name: 'brand',
  },
  {
    label: 'Category',
    name: 'category',
  },
  {
    label: 'Price',
    name: 'price',
    type: 'number',
  },
  {
    label: 'Stock',
    name: 'stock',
    type: 'number',
  },
  {
    label: 'Description',
    name: 'description',
  },
];
