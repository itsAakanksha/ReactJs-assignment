import React, { useState } from 'react';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="w-full bg-gray-800 h-min-[10px]">
      <div className="flex justify-center items-center md:gap-10">
      <div className="md:flex">
      <div className="w-full p-3">       
        <div className="relative">
          <i className="absolute fa fa-search text-gray-400 top-3 left-2"></i>
          <input type="text" className="bg-white h-10 w-full px-8 rounded-lg focus:outline-none hover:cursor-pointer" name=""/>
        </div>   
      </div>
      </div>

        <div className="hidden md:flex  text-gray-300">
          <ul className="flex md:gap-12">
            <li>Categories</li>
            <li>Website Builders</li>
            <li>Today's deals</li>
          </ul>
        </div>

        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          <i className="fa fa-bars text-white text-2xl"></i>
        </div>

        {showMenu && (
          <div className="md:hidden absolute top-16 right-0 bg-gray-800 p-4">
            <ul className="flex flex-col text-gray-300">
              <li>Categories</li>
              <li>Website Builders</li>
              <li>Today's deals</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
