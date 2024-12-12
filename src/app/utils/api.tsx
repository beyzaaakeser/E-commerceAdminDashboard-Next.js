import { Order, Product, User } from '../types';

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

export const createProduct = async (data: Product): Promise<Product> => {
  const res = await fetch(`http://localhost:3030/products`, {
    method: 'POST',
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error('Product adding process failed.');
  }
  return res.json();
};

export const getProductById = async (id: string): Promise<Product[]> => {
  const res = await fetch(`http://localhost:3030/products/${id}`);

  if (!res.ok) {
    throw new Error('Product not found.');
  }

  return res.json();
};

export const updateProduct = async (data: Product): Promise<Product> => {
  const res = await fetch(`http://localhost:3030/products/${data.id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error('Product update failed.');
  }

  return res.json();
};

export const getUsers = async (): Promise<User[]> => {
  const res = await fetch('http://localhost:3030/users');

  if (!res.ok) {
    throw new Error('There was a problem retrieving user data.');
  }

  return res.json();
};

export const deleteUser = async (id: string): Promise<void> => {
  const res = await fetch(`http://localhost:3030/users/${id}`, {
    method: 'DELETE',
  });

  if (!res.ok) {
    throw new Error('There was a problem removing the user account.');
  }

  return res.json();
};
