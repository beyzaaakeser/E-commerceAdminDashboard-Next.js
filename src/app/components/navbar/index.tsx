import { sections } from '@/app/utils/constants';
import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import NavLink from './NavLink';

const Navbar = () => {
  return (
    <nav className="h-screen min-w-[60px]">
      <div className="navbar flex flex-col gap-5 text-gray-500 fixed bg-white h-screen z-50">
        <button className="grid place-items-center pt-5 text-2xl">
          <input type="checkbox" id="menu" />
          <label htmlFor="menu">
            <RxHamburgerMenu className='cursor-pointer' />
          </label>
        </button>
        <div>
          {sections.map((section, key) => (
            <NavLink item={section} key={key} />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
