import React from 'react';
import logo from '../assets/logo-upc.png';

function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-white fixed top-0 left-0 w-full shadow-md z-50">
      <img src={logo} alt="Logo UPC" className="h-12" />
      <h1 className="text-primary2 text-2xl font-bold">UPC Mortalidad</h1>
    </header>
  );
}

export default Header;
