"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

function NavBar() {
  // const [sticky, setSticky] = useState(false);
  

  // useEffect(()=>{

  //   window.addEventListener('scroll', ()=>{
  //     (window.scrollY > 50) ? setSticky(true) : setSticky(false);
  //     console.log(sticky);

  //   })

  //   return()=>{
  //     window.addEventListener('scroll', ()=>{
  //       (window.scrollY > 50) ? setSticky(true) : setSticky(false);
  //       console.log(sticky);
  //     })
  //   }
  // },[]);


  // const[mobileMenu, setMobileMenu] = useState(false)
  // const toogleMenu = ()=>{
  //   mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  // }


  // State for toggling the mobile menu

  
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen)

    document.getElementById('head').classList.toggle('bg-[#814D9A1A]')
  };

  return (

      <div id="nav" >
    <header id="head" className=" flex justify-between md:max-xl:mx-16 xl:w-[75%] mx-auto md:mt-10 bg-[#814D9A1A] bg-opacity-10 px-3 md:px-9 py-5 items-center relative rounded-lg ">
      {/* Logo */}


      <Link href="/">
        <div className="flex items-center gap-2">
          <Image src="logo.svg" alt="logo" width={36} height={36} />
          <span className="text-2xl font-semibold">DeansListDAO</span>
        </div>
      </Link>

      {/* Hamburger Menu Button */}
      <div className=" pr-3 md:pr-0 absolute inset-y-0 right-0 flex items-center lg:hidden">
        <button
          type="button"
          className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          {/* Hamburger Icon */}
          {isOpen ? (
            <svg
              className="block w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="block w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:block">
        <ul className="flex space-x-10 font-semibold">
          <li >
            <Link className="hover:text-[#D896F7] active:text-[#D896F7] focus:text-[#D896F7] " href="#">Home</Link>
          </li>
          <li >
            <Link className="hover:text-[#D896F7] active:text-[#D896F7] focus:text-[#D896F7] " href="#services">Services</Link>
          </li>
          <li className="hover:text-[#D896F7]">
            <Link className="hover:text-[#D896F7] active:text-[#D896F7] focus:text-[#D896F7] " href="#about-us">About Us</Link>
          </li >
          <li className="hover:text-[#D896F7]">
            <Link className="hover:text-[#D896F7] active:text-[#D896F7] focus:text-[#D896F7] " href="#events">Events</Link>
          </li>
          <li className="hover:text-[#D896F7]">
            <Link 
              href="https://leaderboard.deanslist.services/"
              target="blank"
              className="flex items-center gap-1"
              >
              Leaderboard
            </Link>
          </li>
        </ul>
      </nav>

      {/* Button (Desktop Only) */}
      <div className="hidden lg:block">
        <a
          href="https://discord.gg/deanslist"
          target="blank"
          rel="noopener noreferrer"
          >
          <button className="bg-[#9A59BA80] overflow-hidden py-2 px-6 relative rounded-full border border-[#9A59BA] font-medium hover:bg-purple-400 transition flex gap-2 items-center">
					<button className="left-[1px] absolute border-b-[2px] border-b-[#ffffff] h-[40px] blur-[2px] px-16 rounded-[20px] -z-10"></button>
            Get Started
          </button>
        </a>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
        className="absolute top-full left-0 mt-2 w-full -translate-y-[6px] bg-[#090118] text-white pb-[40px] shadow-lg z-10 lg:hidden"
        id="mobile-menu"
        >
          <div className="space-y-2 px-3 py-3">
            <Link
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-200"
              onClick={toggleMenu}
              >
              Home
            </Link>
            <Link
              href="#services"
              className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-200"
              onClick={toggleMenu}
              >
              Services
            </Link>
            <Link
              href="#about-us"
              className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-200"
              onClick={toggleMenu}
              >
              About Us
            </Link>
            <Link
              href="#events"
              className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-200"
              onClick={toggleMenu}
              >
              Events
            </Link>
            <Link
              href="https://leaderboard.deanslist.services/"
              target="blank"
              className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-200"
              onClick={toggleMenu}
            >
              Leaderboard
            </Link>
          </div>
        </div>
      )}
    </header>
      </div>
  );
}

export default NavBar;
