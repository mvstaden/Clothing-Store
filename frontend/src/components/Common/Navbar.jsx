import { Link } from "react-router-dom";

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
        </div>
      </nav>
    </>
  );
};
export default Navbar;
