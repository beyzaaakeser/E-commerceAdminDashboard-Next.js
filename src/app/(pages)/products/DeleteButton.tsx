'use client';

import { deleteProduct } from '@/app/utils/api';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

type Props = {
  id: string;
};

const DeleteButton = ({ id }: Props) => {
  const router = useRouter();
  const handleDelte = () => {
    if (!confirm('Are you sure you want to delete the product?')) return;

    deleteProduct(id)
      .then(() => {
        router.refresh();
        toast.info('Product deleted successfully');
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <button
      onClick={handleDelte}
      className="py-1 px-3 bg-[#f3a5a5] hover:bg-[#f45757] transition rounded-md"
    >
      DeleteButton
    </button>
  );
};

export default DeleteButton;
