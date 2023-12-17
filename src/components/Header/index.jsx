import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="bg-gray-800 p-4 fixed w-full top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold">
            Country Details find app
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
