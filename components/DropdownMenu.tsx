"use client";
import Link from "next/link";
import { useState } from "react";

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Menu{" "}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          id="dropdown"
          className="absolute right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            className="py-5 text-sm text-gray-700 dark:text-gray-200 text-center"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <Link
                href={"/home/aboutme"}
                className="block px-4 py-2 hover:text-[#007bff]  font-semibold text-[20px] dark:hover:bg-gray-600 dark:hover:text-white"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                href={"/home/proyectos"}
                className=" px-4 py-2 hover:text-[#007bff] block font-semibold text-[20px] dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href={"/home/contact"}
                className=" px-4 py-2 hover:text-[#007bff] block font-semibold text-[20px] dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
