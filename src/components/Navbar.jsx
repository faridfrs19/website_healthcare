import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full transition-all ${scrolled ? 'bg-slate-200 shadow-lg' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className={`h-6 w-6 ${mobileMenuOpen ? 'hidden' : 'block'}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className={`h-6 w-6 ${mobileMenuOpen ? 'block' : 'hidden'}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 sm:ms-6 ms-12 items-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img className="h-8 w-auto" src={logo} alt="HealthCare" />
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:flex-1 sm:justify-center">
              <div className="flex space-x-4 font-semibold">
                <Link
                  to="/"
                  className="rounded-md px-3 py-2 text-sm text-slate-800 hover:bg-gray-500 hover:text-white"
                >
                  Home
                </Link>
                <Link
                  to="/service"
                  className="rounded-md px-3 py-2 text-sm text-slate-800 hover:bg-gray-500 hover:text-white"
                >
                  Service
                </Link>
                <Link
                  to="/contact-us"
                  className="rounded-md px-3 py-2 text-sm text-slate-800 hover:bg-gray-500 hover:text-white"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute sm:mr-6 inset-y-0 right-0 gap-2 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative font-bold font-mono rounded bg-green-700 p-1 px-6 text-slate-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              Log In
            </button>
          </div>
        </div>
      </div>
      <div className={`sm:hidden ${mobileMenuOpen ? 'block' : 'hidden'} px-2 pb-2`} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2 bg-slate-100 rounded-md shadow-lg">
          <Link
            to="/"
            className="block rounded-md px-3 py-2 text-base font-semibold text-slate-800 hover:bg-gray-500 hover:text-white"
            aria-current="page"
          >
            Home
          </Link>
          <Link
            to="/service"
            className="block rounded-md px-3 py-2 text-base font-semibold text-slate-800 hover:bg-gray-500 hover:text-white"
          >
            Service
          </Link>
          <Link
            to="/contact"
            className="block rounded-md px-3 py-2 text-base font-semibold text-slate-800 hover:bg-gray-500 hover:text-white"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
