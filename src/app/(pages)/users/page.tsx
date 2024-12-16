import UsersTable from '@/app/components/table/UsersTable';
import React from 'react';
import Modal from './Modal';

type Props = {
  searchParams: Promise<{ show?: string }>;
};

const Users = async ({ searchParams }: Props) => {
  const { show } = await searchParams;
  console.log(show);
  return (
    <div>
      <h1 className="title">Users</h1>
      <UsersTable />

      {show && <Modal id={show} />}
    </div>
  );
};

export default Users;
