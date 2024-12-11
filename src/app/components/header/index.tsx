import React from 'react';
import Input from './Input';
import { BiSolidBellRing } from 'react-icons/bi';
import Image from 'next/image';
import profile from '@/app/assets/images/man.webp';

const Header = () => {
  return (
    <header className="border p-2 flex justify-between">
      <Input />
      <div className="flex gap-5 items-center">
        <BiSolidBellRing className="text-xl cursor-pointer" />
        <div className='flex gap-3'>
          <Image
            src={profile}
            height={40}
            width={40}
            className="object-contain "
            alt="profile"
          />

          <div>
            <p className='font-semibold'>Beyza Keser</p>
            <p>Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;