"use client";

import { deleteUser } from '@/app/utils/api';
import { useRouter } from 'next/navigation';
import { FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';

type Props = {
  userId: string;
};

const DeleteUserButton = ({ userId }: Props) => {
  const router = useRouter();
  const handleDelete = () => {
    deleteUser(userId)
      .then(() => {
        toast.success('User deleted successfully');
        router.refresh();
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <button
      onClick={handleDelete}
      className="border shadow p-2 rounded-md hover:shadow-lg text-red-500 hover:bg-gray-200 transition"
    >
      <FaTrash />
    </button>
  );
};

export default DeleteUserButton;
