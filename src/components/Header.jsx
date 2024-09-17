import React, { useState } from "react";

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);

  // Fungsi untuk toggle visibilitas div
  const toggleDiv = () => {
    setIsVisible(!isVisible);
  };

  return (
    <header className="container flex flex-row justify-between sticky top-0 left-0 bg-white">
      <img src="./svg/header-logo.svg" alt="Header Logo" />
      <div className="flex flex-row items-center gap-4">
        <nav className="flex items-center border-r-2 pr-4">
          <ul className="flex flex-row gap-4">
            <li className="active">
              <a href="">Home</a>
            </li>
            <li className="">
              <a href="">Story</a>
            </li>
            <li className="">
              <a href="">Gallery</a>
            </li>
            <li className="">
              <a href="">Contant Us</a>
            </li>
          </ul>
        </nav>

        {!isVisible && (
          <div id="search" onClick={toggleDiv} className="icon-loop">
            <svg
              aria-label="icon-loop"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#8A53FF"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        )}
        {isVisible && (
          <div className="relative">
            <input
              className="w-92 rounded-full border-2 relative"
              type="text"
            />
            <div
              id="search-2"
              onClick={toggleDiv}
              className="absolute top-[2px] right-2"
            >
              <svg
                aria-label="icon-loop"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#8A53FF"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
          </div>
        )}
        <div className="icon-user">
          <svg
            aria-label="icon-user"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#8A53FF"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </div>
      </div>
    </header>
  );
}
