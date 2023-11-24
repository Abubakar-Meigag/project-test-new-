import React from 'react'
import { Link } from 'react-router-dom';
import { LuClipboardEdit } from "react-icons/lu";
import { BsMenuButtonWideFill } from "react-icons/bs";
import { FaClipboardCheck } from "react-icons/fa6";
import image from "../components/images/tom-user.png";




const Nav = () => {
  return (
    <div>
      <div className="navbar p-5 bg-sky-950  min-w-max text-fuchsia-100">
        <div className="hidden md:flex">
          <ul className="flex gap-1 pl-5 font-bold">
            <li className="inline-flex p-2 hover:text-sky-300">
              <Link to="/">
                <BsMenuButtonWideFill
                  className={`rounded cursor-pointer block float-left mr-1 duration-500 text-3xl`}
                />
              </Link>
              <Link to="/" className="pt-1 text-">
                Dashboard
              </Link>
            </li>

            <li className="inline-flex p-2 hover:text-sky-300">
              <Link to="/topics">
                <LuClipboardEdit
                  className={` rounded cursor-pointer block float-left  text-3xl duration-500
                `}
                />
              </Link>
              <Link to="/topics" className="pt-1 ">
                Topics
              </Link>
            </li>

            <li className="inline-flex p-2 hover:text-sky-300">
              <Link to="/test">
                <FaClipboardCheck
                  className={`rounded cursor-pointer block float-left  text-3xl duration-500`}
                />
              </Link>
              <Link to="/test" className="pt-1">
                Test
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-start">
          <div className="dropdown md:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 32 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Dashboard</Link>
              </li>
              <li>
                <Link to="/topics">Topics</Link>
              </li>
              <li>
                <Link to="/test">Test</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-center">
          <div className=" normal-case text-3xl font-semibold  text-center mr-32 text-fuchsia-100">
            CYF Spaced Repetition
          </div>
        </div>

        <div className="navbar-end hidden sm:flex">
          <button className="btn btn-ghost btn-circle">
            <div className="flex-none gap-2">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-16 rounded-full">
                    <img src={image} alt="none" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a href="/#" className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a href="/#">Settings</a>
                  </li>
                  <li>
                    <a href="/#">Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav