import React, { useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import livelogo from "../images/livelogo.webm";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const openDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-4 mt-4">
          <div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-lg rounded-2xl border border-[#e5e5e5] shadow-sm">
            <div className="px-6 py-4">
              <div className="grid grid-cols-3 items-center">
                {/* Left Links */}
                <div className="hidden lg:flex justify-evenly items-center gap-1">
                  <div className="relative">
                    <button
                      className="relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm tracking-wide transition-all text-[#1a1a1a] font-medium"
                      tabIndex={0}
                      onClick={openDropdown}
                    >
                      SpaceFest
                      {showDropdown ? (
                        <ArrowUp size={18} />
                      ) : (
                        <ArrowDown size={18} />
                      )}

                      {/* <div className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#1a1a1a] rounded-full"></div> */}
                    </button>

                    {showDropdown && (
                      <div className="absolute top-14 left-0 w-40 bg-white rounded-2xl shadow-lg border overflow-hidden z-50">
                        <div className="grid">
                          <NavLink to=""className="hover:bg-gray-100 cursor-pointer p-3">
                            Spacefest
                          </NavLink>
                          <p className="hover:bg-gray-100 cursor-pointer p-3">
                            HackFest
                          </p>
                          <p className="hover:bg-gray-100 cursor-pointer p-3">
                            More
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  <NavLink to="/about">
                    {({ isActive }) => (
                      <button
                        className={`relative px-4 py-2 rounded-xl text-sm tracking-wide transition-all ${
                          isActive
                            ? "text-[#1a1a1a] font-medium"
                            : "text-[#8a8a8a] hover:text-[#3a3a3a] hover:bg-[#f5f5f5]"
                        }`}
                      >
                        About

                        {isActive && (
                          <div className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#1a1a1a] rounded-full"></div>
                        )}
                      </button>
                    )}
                  </NavLink>

                  <NavLink to="/apply">
                    {({ isActive }) => (
                      <button
                        className={`relative px-4 py-2 rounded-xl text-sm tracking-wide transition-all ${
                          isActive
                            ? "text-[#1a1a1a] font-medium"
                            : "text-[#8a8a8a] hover:text-[#3a3a3a] hover:bg-[#f5f5f5]"
                        }`}
                      >
                        Apply

                        {isActive && (
                          <div className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#1a1a1a] rounded-full"></div>
                        )}
                      </button>
                    )}
                  </NavLink>
                </div>

                {/* Logo */}
                <Link to="/">
                  <div className="flex justify-center items-center gap-3">
                    <video
                      src={livelogo}
                      autoPlay
                      loop
                      muted
                      className="w-25 h-25 absolute overflow-hidden rounded-full bg-white"
                    />
                  </div>
                </Link>

                {/* Right Links */}
                <div className="hidden lg:flex justify-evenly items-center gap-1">
                  <NavLink to="/events">
                  {({ isActive }) => (
                    <button
                      className={`relative px-4 py-2 rounded-xl text-sm tracking-wide transition-all ${
                        isActive
                          ? "text-[#1a1a1a] font-medium"
                          : "text-[#8a8a8a] hover:text-[#3a3a3a] hover:bg-[#f5f5f5]"
                      }`}
                    >
                      Events

                      {isActive && (
                        <div className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#1a1a1a] rounded-full"></div>
                      )}
                    </button>
                  )}
                </NavLink>

                  <NavLink to="/accelerator">
                    {({ isActive }) => (
                      <button
                        className={`relative px-4 py-2 rounded-xl text-sm tracking-wide transition-all ${
                          isActive
                            ? "text-[#1a1a1a] font-medium"
                            : "text-[#8a8a8a] hover:text-[#3a3a3a] hover:bg-[#f5f5f5]"
                        }`}
                      >
                        accelerator

                        {isActive && (
                          <div className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#1a1a1a] rounded-full"></div>
                        )}
                      </button>
                    )}
                  </NavLink>

                  <NavLink to="/div">
                    {({ isActive }) => (
                      <button
                        className={`relative px-4 py-2 rounded-xl text-sm tracking-wide transition-all ${
                          isActive
                            ? "text-[#1a1a1a] font-medium"
                            : "text-[#8a8a8a] hover:text-[#3a3a3a] hover:bg-[#f5f5f5]"
                        }`}
                      >
                        Div

                        {isActive && (
                          <div className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#1a1a1a] rounded-full"></div>
                        )}
                      </button>
                    )}
                  </NavLink>
                </div>

                {/* Mobile Menu */}
                <button className="lg:hidden p-2 rounded-xl hover:bg-[#f5f5f5] transition-colors">
                  <div className="space-y-1.5">
                    <div className="w-5 h-0.5 bg-[#1a1a1a]"></div>
                    <div className="w-5 h-0.5 bg-[#1a1a1a]"></div>
                    <div className="w-5 h-0.5 bg-[#1a1a1a]"></div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;