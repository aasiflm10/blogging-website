"use client"
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import LightModeIcon from '@mui/icons-material/LightMode';

export function TopBar({ name }: { name: string }) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = ()=>{
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="p-5 text-xl  flex justify-between">
      <div className="p-2 font-bold">{name}</div>
      <div className="hidden md:flex space-x-4">
        <button className="p-2">Blog</button>
        <button className="p-2">Projects</button>
        <button className="p-2">About</button>
        <button className="p-2">Newsletter</button>
        <div className="py-3 flex space-x-2">
          <NightlightRoundIcon/>
          <LightModeIcon/>
        </div>
      </div>
      <div className="md:hidden">
        <MenuIcon onClick={toggleMenu} className="cursor-pointer"/>
      </div>

      {/* Side menu for mobile */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 z-50 flex justify-end">
          <div className="bg-white w-64 h-full shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold">{name}</h2>
              <CloseIcon
                onClick={toggleMenu}
                className="cursor-pointer text-gray-700"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <button className="text-left">Blog</button>
              <button className="text-left">Projects</button>
              <button className="text-left">About</button>
              <button className="text-left">Newsletter</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
