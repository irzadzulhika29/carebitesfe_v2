import { useState, useEffect, useRef } from 'react';
import userData from '../../assets/user/userData.json';
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Navbar = ({ showSearchBar }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Reference to the dropdown for detecting outside clicks

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };



  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="ml-[280px] fixed top-0 left-0 right-0 m-5 mx-10 bg-white p-3 shadow-md rounded-md flex items-center justify-between z-50">
      {showSearchBar && (
        <div className="flex items-center bg-gray-100 rounded-lg p-2 shadow-sm w-full max-w-xs">
          <div className="bg-[#45c517] p-2 rounded-lg">
            <FaSearch className="text-white" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="ml-2 bg-transparent outline-none text-gray-600 placeholder-gray-400"
          />
        </div>
      )}

      {!showSearchBar && (
        <h1 className='text-xl font-semibold'>Welcome, {userData.user.name}!</h1>
      )}

      <ul className=" flex items-center gap-5">

        <NavLink
          to="/cart"
          className={({ isActive }) => `
    hover:cursor-pointer 
    hover:text-[#45c517] 
    transition-colors 
    duration-200 
    ${isActive ? 'text-[#45c517]' : 'text-gray-500'}
  `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-cart4"
            viewBox="0 0 16 16"
          >
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
          </svg>
        </NavLink>

        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="gray">
          <path d="M18 10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10V18H18V10ZM20 18.6667L20.4 19.2C20.5657 19.4209 20.5209 19.7343 20.3 19.9C20.2135 19.9649 20.1082 20 20 20H4C3.72386 20 3.5 19.7761 3.5 19.5C3.5 19.3918 3.53509 19.2865 3.6 19.2L4 18.6667V10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10V18.6667ZM9.5 21H14.5C14.5 22.3807 13.3807 23.5 12 23.5C10.6193 23.5 9.5 22.3807 9.5 21Z"></path>
        </svg>

        <div className="flex items-center gap-2 relative" ref={dropdownRef}>
          <div className="border-2 border-[#45c517] rounded-full">
            <img
              src={userData.user.image_url}
              alt=""
              className="min-w-5 h-5 object-cover rounded-full"
            />
          </div>

          <div className='flex items-center gap-3'>
            <div>
              <h1>{userData.user.name}</h1>
              <h1 className="text-xs">{userData.user.location}</h1>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              onClick={toggleDropdown}
              className="cursor-pointer"
            >
              <path d="M12 16L6 10H18L12 16Z"></path>
            </svg>
          </div>

          {isDropdownOpen && (
            <div className="absolute right-0 top-12 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
              <ul className="py-1">
                <Link to="/profile">
                  <li
                    className="px-4 py-2 hover:bg-[#45c517] hover:text-white cursor-pointer"

                  >
                    Profile
                  </li>
                </Link>

                <li
                  className="px-4 py-2 hover:bg-[#45c517] hover:text-white cursor-pointer"

                >
                  Help & Support
                </li>
                <Link to="/">
                  <li
                    className="px-4 py-2 hover:bg-[#45c517] hover:text-white cursor-pointer text-red-600"

                  >
                    Logout
                  </li>
                </Link>

              </ul>
            </div>
          )}


        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
