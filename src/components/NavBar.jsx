import React, {useState} from "react";
import { Search, User } from 'lucide-react';
// import {logo } from "../assets/logo.jpeg";

const NavBar = () => {
  const [searchExpanded, setSearchExpanded] = useState(false);
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-4 mt-4">
          <div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-lg rounded-2xl border border-[#e5e5e5] shadow-sm">
            <div className="px-6 py-4">
              <div className="grid grid-cols-3 items-center">
                {/* Pages */}
                <div className="hidden lg:flex justify-evenly items-center gap-1">
                  <button
                    className="relative px-4 py-2 rounded-xl text-sm tracking-wide transition-all text-[#1a1a1a] font-medium"
                    tabindex="0"
                  >
                    SpaceFest
                    <div className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#1a1a1a] rounded-full"></div>
                  </button>
                  <button
                    className="relative px-4 py-2 rounded-xl text-sm tracking-wide transition-all text-[#8a8a8a] hover:text-[#3a3a3a] hover:bg-[#f5f5f5]"
                    tabindex="0"
                  >
                    About
                  </button>
                  <button
                    className="relative px-4 py-2 rounded-xl text-sm tracking-wide transition-all text-[#8a8a8a] hover:text-[#3a3a3a] hover:bg-[#f5f5f5]"
                    tabindex="0"
                  >
                    Apply
                  </button>
                </div>
                {/* Logo */}
                <div className="flex  justify-center items-center gap-3">
                  {/* {logo} */}
                  <div className="w-25 shadow-lg h-25 absolute rounded-full bg-white ">

                  </div>
                </div>
                {/* Extras */}
                <div className="hidden lg:flex justify-evenly items-center gap-1">
                  <button
                    className="relative px-4 py-2 rounded-xl text-sm tracking-wide transition-all text-[#1a1a1a] font-medium"
                    tabindex="0"
                  >
                    Events
                    <div className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#1a1a1a] rounded-full"></div>
                  </button>
                  <button
                    className="relative px-4 py-2 rounded-xl text-sm tracking-wide transition-all text-[#8a8a8a] hover:text-[#3a3a3a] hover:bg-[#f5f5f5]"
                    tabindex="0"
                  >
                    Accelerator
                  </button>
                  <button
                    className="relative px-4 py-2 rounded-xl text-sm tracking-wide transition-all text-[#8a8a8a] hover:text-[#3a3a3a] hover:bg-[#f5f5f5]"
                    tabindex="0"
                  >
                    Gallery
                  </button>
                </div>

                <button className="lg:hidden p-2 rounded-xl hover:bg-[#f5f5f5] transition-colors">
                  <div className="space-y-1.5">
                    <div className="w-5 h-0.5 bg-[#1a1a1a] transition-all "></div>
                    <div className="w-5 h-0.5 bg-[#1a1a1a] transition-all "></div>
                    <div className="w-5 h-0.5 bg-[#1a1a1a] transition-all "></div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
