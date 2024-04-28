'use client'

import React from 'react';
import { useUser } from '@clerk/clerk-react';
import Logo from '../public/logo.png';
import { UserButton } from '@clerk/nextjs';

const Navbar = () => {
  const { user } = useUser();

  return (
    <nav className='flex items-center justify-between px-6 py-4 text-white'>
      <div className="logo text-2xl font-extrabold">
        Snippyfy
      </div>

      <div className='flex gap-2'>
        <strong>{user?.fullName}</strong>
        <UserButton />
      </div>
    </nav>
  );
}

export default Navbar;
