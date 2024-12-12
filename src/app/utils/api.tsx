import { Order, Product } from '../types';

export const getOrders = async (): Promise<Order[]> => {
  const res = await fetch('http://localhost:3030/orders');

  if (!res.ok) {
    throw new Error('There was a problem while fetching orders.');
  }

  return res.json();
};

export const getProducts = async (): Promise<Product[]> => {
  const res = await fetch('http://localhost:3030/products');

  if (!res.ok) {
    throw new Error('There was a problem while fetching products.');
  }

  return res.json();
};

export const deleteProduct = async (id: string): Promise<void> => {
  const res = await fetch(`http://localhost:3030/products/${id}`, {
    method: 'DELETE',
  });

  if (!res.ok) {
    throw new Error('Product deletion failed.');
  }
};