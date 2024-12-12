import Form from '@/app/components/form';
import { getProductById } from '@/app/utils/api';
import React from 'react';
type Props = {
  params: Promise<{
    slug: string;
  }>;
};
const Page = async ({ params }: Props) => {
  const { slug } = await params;

  const isAdd = slug === 'new';

  let editItem;
  if (!isAdd) {
    editItem = await getProductById(slug);
  }

  return (
    <div>
      <h1 className="title">{isAdd ? 'Add New Product' : 'Edit Product'}</h1>
      <Form editItem={editItem} />
    </div>
  );
};

export default Page;
