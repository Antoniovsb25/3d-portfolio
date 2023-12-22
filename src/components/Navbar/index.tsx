import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="bg-white text-lg rounded-lg items-center justify-center shadow-md px-4 font-bold hover:scale-110 duration-75"
      >
        <p className="blue-gradient_text">Home</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `bg-white rounded-lg items-center justify-center shadow-md px-4 font-semibold hover:scale-110 duration-75 ${
              isActive ? "text-blue-500" : "text-black"
            }`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `bg-white rounded-lg  items-center justify-center shadow-md px-4 font-semibold hover:scale-110 duration-75 ${
              isActive ? "text-blue-500" : "text-black"
            }`
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
