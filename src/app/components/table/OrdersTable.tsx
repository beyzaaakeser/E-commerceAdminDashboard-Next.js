import React from 'react';
import TableContainer from '.';
import { Order } from '@/app/types';

type Props = {
  orders: Order[];
};

const OrdersTable = ({ orders }: Props) => {
  const getColor = (status: string) => {
    switch (status) {
      case 'Shipped':
        return 'bg-blue-600';
      case 'Delivered':
        return 'bg-green-600';
      case 'Processing':
        return 'bg-yellow-600';
      default:
        return 'bg-gray-600';
    }
  };
  return (
    <TableContainer>
      <thead>
        <tr>
          <th className=" ">id</th>
          <th>Total Price</th>
          <th>Number of Products</th>
          <th>Order Date</th>
          <th>Shipping Address</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order, key) => (
          <tr key={key} className="border-b">
            <td>{order.id}</td>
            <td className="text-green-600">$ {order.total_price}</td>
            <td>{order.items.reduce((acc, item) => item.quantity, 0)}</td>
            <td>
              {new Date(order.order_date).toLocaleDateString('en', {
                day: '2-digit',
                month: 'short',
                year: '2-digit',
              })}
            </td>
            <td>{order.shipping_address.city}</td>
            <td>
              <span
                className={`py-1 px-2 text-black rounded-lg shadow ${getColor(
                  order.status
                )} `}
              >
                {order.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </TableContainer>
  );
};

export default OrdersTable;
