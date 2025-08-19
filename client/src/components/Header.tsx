import { Link, useNavigate } from "react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { useAuth } from "../context/AuthContext";
import { usePopUp } from "../context/PopUpContext";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { popHandler } = usePopUp();

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const logoutHandler = () => {
    logout();
    popHandler("You have logged out!");
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      viewport={{ once: true }}
      className="sticky top-0 z-30 justify-between items-center px-5 h-20 bg-black/90 text-white"
    >
      <div className="flex justify-between items-center px-6 h:15 md:h-20">
        {/* Logo */}
        <div className="flex text-3xl ">
          <Link to="/">casaFind</Link>
        </div>

        {/* Desktop menu */}
        <nav className="hidden md:flex text-lg gap-10">
          <Link to="/catalog">Find a Home</Link>
          {user && (<Link to="/sell">Sell</Link>)}
          {user && (<Link to="/findAgent">Choose an Agent</Link>)}
          <Link to="contact">Contact</Link>
          <Link to="about">About us</Link>
        </nav>

        <nav className="hidden md:flex items-center text-lg gap-10">
          {user ? (
            <>
              <span className="text-sm text-gray-300">Hello, {user.email}</span>
              {user.email === "admin@abv.bg" && (
                <Link className="hover:underline cursor-pointer" to="/admin">
                  Admin
                </Link>
              )}
              <button
                onClick={logoutHandler}
                className="hover:underline cursor-pointer"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </nav>

        {/* Burger icon */}
        <div
          className="md:hidden py-5 text-3xl cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? <IoClose /> : <IoMenu />}
        </div>
      </div>

      {/* Mobile burger Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 text-white flex flex-col gap-6 px-6 py-5 pb-6">
          {user && (
            <span className="text-sm text-gray-300">Hello, {user.email}</span>
          )}
          <Link to="/catalog" onClick={toggleMenu}>
            Find a Home
          </Link>
          {user && (
            <Link to="/sell" onClick={toggleMenu}>
              Sell
            </Link>
          )}
          {user && (<Link to="/findAgent">Choose an Agent</Link>)}
          <Link to="/contact" onClick={toggleMenu}>
            Contact
          </Link>
          <Link to="/about" onClick={toggleMenu}>
            About us
          </Link>

          {user ? (
            <button
              className="cursor-pointer"
              onClick={() => {
                toggleMenu();
                logoutHandler();
              }}
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" onClick={toggleMenu}>
                Login
              </Link>
              <Link to="/register" onClick={toggleMenu}>
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </motion.div>
  );
}
