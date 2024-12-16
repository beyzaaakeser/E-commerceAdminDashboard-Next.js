import OrdersTable from '@/app/components/table/OrdersTable';
import { Order } from '@/app/types';
import { getOrders } from '@/app/utils/api';
import React from 'react';

const Orders = async () => {
  const orders: Order[] = await getOrders();
  return (
    <div>
      <h1 className="title">Orders</h1>
      <OrdersTable orders={orders} />
    </div>
  );
};

export default Orders;
