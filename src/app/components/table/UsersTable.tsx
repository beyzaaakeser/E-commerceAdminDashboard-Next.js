import React from 'react';
import TableContainer from '.';
import { getUsers } from '@/app/utils/api';
import { FaEye, FaTrash } from 'react-icons/fa';
import DeleteUserButton from './DeleteUserButton';

const UsersTable = async () => {
  const users = await getUsers();
  return (
    <TableContainer>
      <thead>
        <tr className="border-b shadow">
          <th className="py-4">#</th>
          <th className="">Name</th>
          <th className="">Email</th>
          <th className="">Country</th>
          <th className="">City</th>
          <th className="">Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, key) => (
          <tr key={key} className="border-b">
            <td className="py-8">{key}</td>
            <td> {user.name}</td>
            <td> {user.email}</td>
            <td> {user.address.country}</td>
            <td> {user.address.city}</td>
            <td className="">
              <div className="flex gap-3 items-center justify-center">
                <button className="border shadow p-2 rounded-md hover:shadow-lg hover:bg-gray-200 transition">
                  <FaEye />
                </button>
                <DeleteUserButton userId={user.id} />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </TableContainer>
  );
};

export default UsersTable;
