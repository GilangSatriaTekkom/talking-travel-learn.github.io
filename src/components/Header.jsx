import React, { useState, useRef, useEffect } from "react";

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);

  // Gunakan useRef untuk mereferensikan elemen input
  const inputRef = useRef(null);

  // Fungsi untuk memfokuskan input
  const handleButtonClick = () => {
    inputRef.current.focus(); // Memunculkan kursor pada input
  };

  const toggleVisible = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    console.log("isVisible:", isVisible);
  }, [isVisible]);

  const [query, setQuery] = useState("");
  const [items, setItems] = useState([
    "House in the city",
    "Real Estate Investment",
    "Apartment for sale",
    "Luxury House",
    "Condo in the suburbs",
  ]);
  const [filteredItems, setFilteredItems] = useState(items);

  const toggleSearch = () => {
    // Filter items based on the query
    const filtered = items.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <header className="container flex flex-row justify-between sticky top-0 left-0 bg-white z-20">
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

        <div className="relative">
          <input
            id="inputSearch"
            className={`pl-3 pr-8 border-b-2 pb-1 relative transition-opacity duration-300 ease-in-out ${
              !isVisible ? " w-0 opacity-0" : "w-full opacity-100"
            }`}
            type="text"
            ref={inputRef}
            value={query}
            onChange={handleInputChange}
            placeholder="Search..."
          />
          <div
            id="search-2"
            onClick={toggleVisible}
            className="absolute top-[2px] z-30 right-2"
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
