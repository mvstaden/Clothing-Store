import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
} from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import Searchbar from "./Searchbar";
const centerLinks = [
  {
    path: "/collections/all",
    text: "Men",
  },
  {
    path: "#",
    text: "Woman",
  },
  {
    path: "/collections/all",
    text: "Top Wear",
  },
  {
    path: "/collections/all",
    text: "Bottom Wear",
  },
];
const Navbar = () => {
  const [cartDrawerOpen, seCartDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);

  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };
  const toggleCartDrawer = () => {
    seCartDrawerOpen(!cartDrawerOpen);
  };

  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Left Logo */}
        <div>
          <Link to={"/"} className="text-2xl font-medium">
            Clothy
          </Link>
        </div>

        {/* Center Nav Links */}
        <div className="hidden md:flex space-x-6">
          {centerLinks.map(({ path, text }) => (
            <Link
              key={text}
              to={path}
              className="text-gray-700 hover:text-black text-sm font-medium uppercase">
              {text}
            </Link>
          ))}
        </div>

        {/* Right Links & Admin */}
        <div className="flex items-center space-x-4">
          <Link
            to={"/admin"}
            className="block bg-black text-white px-2 rounded text-sm">
            Admin
          </Link>

          <Link to={"/profile"} className="hover:text-black">
            <HiOutlineUser className="size-6 text-gray-700" />
          </Link>

          <button
            className="relative hover:text-black"
            onClick={toggleCartDrawer}>
            <HiOutlineShoppingBag className="size-6 text-gray-700" />
            <span className="absolute -top-1 bg-clothy-blue text-white text-xs rounded-full px-2 py-0.5">
              4
            </span>
          </button>

          {/* Search bar */}
          <div className="overflow-hidden">
            <Searchbar />
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
