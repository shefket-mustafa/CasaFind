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
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full"
    >
      
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md border-b border-white/10" />

      
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 h-20 flex justify-between items-center">
        
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/"
            className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent hover:from-blue-500 hover:to-blue-700 transition"
          >
            casaFind
          </Link>
        </motion.div>

        
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/catalog"
            className="text-gray-100 hover:text-blue-400 transition-colors font-medium relative group"
          >
            Find a Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all" />
          </Link>
          {user && (
            <Link
              to="/sell"
              className="text-gray-100 hover:text-blue-400 transition-colors font-medium relative group"
            >
              Sell
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all" />
            </Link>
          )}
          {user && (
            <Link
              to="/findAgent"
              className="text-gray-100 hover:text-blue-400 transition-colors font-medium relative group"
            >
              Find Agent
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all" />
            </Link>
          )}
          <Link
            to="/contact"
            className="text-gray-100 hover:text-blue-400 transition-colors font-medium relative group"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all" />
          </Link>
          <Link
            to="/about"
            className="text-gray-100 hover:text-blue-400 transition-colors font-medium relative group"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all" />
          </Link>
        </nav>

        
        <div className="hidden md:flex items-center gap-6">
          {user ? (
            <>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-sm font-bold">
                  {user.email.charAt(0).toUpperCase()}
                </div>
                <span className="text-sm text-gray-300">{user.email}</span>
              </div>
              {user.email === "admin@abv.bg" && (
                <Link
                  to="/admin"
                  className="text-xs bg-purple-500/20 text-purple-300 px-3 py-1 rounded-lg hover:bg-purple-500/40 transition"
                >
                  Admin
                </Link>
              )}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={logoutHandler}
                className="px-4 py-2 rounded-lg bg-red-500/20 text-red-300 hover:bg-red-500/30 transition font-medium text-sm"
              >
                Logout
              </motion.button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="px-4 py-2 text-gray-100 hover:text-blue-400 transition font-medium"
              >
                Sign In
              </Link>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/register"
                  className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all"
                >
                  Get Started
                </Link>
              </motion.div>
            </>
          )}
        </div>

        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleMenu}
          className="md:hidden text-white text-2xl p-2"
        >
          {isOpen ? <IoClose /> : <IoMenu />}
        </motion.button>
      </div>

      
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden absolute top-20 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-white/10 py-6 px-4"
        >
          <div className="space-y-4">
            {user && (
              <div className="px-4 py-2 bg-white/10 rounded-lg">
                <p className="text-xs text-gray-400">Logged in as</p>
                <p className="text-sm text-gray-100 font-medium">
                  {user.email}
                </p>
              </div>
            )}

            <Link
              to="/catalog"
              onClick={toggleMenu}
              className="block text-gray-100 hover:text-blue-400 transition font-medium py-2"
            >
              Find a Home
            </Link>
            {user && (
              <Link
                to="/sell"
                onClick={toggleMenu}
                className="block text-gray-100 hover:text-blue-400 transition font-medium py-2"
              >
                Sell
              </Link>
            )}
            {user && (
              <Link
                to="/findAgent"
                onClick={toggleMenu}
                className="block text-gray-100 hover:text-blue-400 transition font-medium py-2"
              >
                Find Agent
              </Link>
            )}
            <Link
              to="/contact"
              onClick={toggleMenu}
              className="block text-gray-100 hover:text-blue-400 transition font-medium py-2"
            >
              Contact
            </Link>
            <Link
              to="/about"
              onClick={toggleMenu}
              className="block text-gray-100 hover:text-blue-400 transition font-medium py-2"
            >
              About
            </Link>

            <div className="border-t border-white/10 pt-4 mt-4 space-y-3">
              {user ? (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    toggleMenu();
                    logoutHandler();
                  }}
                  className="w-full px-4 py-2 bg-red-500/20 text-red-300 hover:bg-red-500/30 rounded-lg transition font-medium"
                >
                  Logout
                </motion.button>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={toggleMenu}
                    className="block text-center px-4 py-2 text-gray-100 hover:text-blue-400 transition font-medium"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    onClick={toggleMenu}
                    className="block text-center px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg transition font-medium"
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
}
