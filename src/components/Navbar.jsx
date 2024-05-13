// Navbar.js

import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="text-3xl font-bold text-[#22d3ee]">IISOW</h1>
      <ul className="hidden md:flex text-black">
        <NavItem title="Anasayfa" />
        <NavItem title="Kampanya" />
        <NavItem title="Kaynaklar" />
        <NavItem title="Hakkımızda" />
        <NavItem title="İletişim" />
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <MobileMenu isOpen={nav} />
    </nav>
  );
};

const NavItem = ({ title }) => {
  return <li className="p-4">{title}</li>;
};

const MobileMenu = ({ isOpen }) => {
  return (
    <ul className={`fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] transition-all duration-500 ${isOpen ? 'ease-in' : 'ease-out'} ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <h1 className="text-3xl font-bold text-[#22d3ee] m-4">IISOW</h1>
      <NavItem title="Anasayfa" />
      <NavItem title="Kampanya" />
      <NavItem title="Kaynaklar" />
      <NavItem title="Hakkımızda" />
      <NavItem title="İletişim" />
    </ul>
  );
};

export default Navbar;
