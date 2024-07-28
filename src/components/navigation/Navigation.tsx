import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconBrandX,
} from "@tabler/icons-react";
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const socialIcons = [
    { Icon: IconBrandGithub, link: "https://github.com/adamst27" },
    { Icon: IconBrandInstagram, link: "https://instagram.com/stadagency_" },
    { Icon: IconBrandX, link: "https://x.com/vitocorleone2g" },
    { Icon: IconBrandWhatsapp, link: "https://wa.me/212666261476" },
  ];

  const menuVariants = {
    closed: {
      x: "100%",
      borderTopLeftRadius: "50%",
      borderBottomLeftRadius: "50%",
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
    open: {
      x: 0,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <AnimatePresence>
        {!isScrolled && (
          <motion.nav
            className="fixed top-0 left-0 w-full z-50  justify-center items-center h-20 lg:flex hidden"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
          >
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  <Link
                    to={item.path}
                    className="text-lg text-white hover:text-indigo-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      <div
        className={`fixed top-4 right-4 z-50 ${
          isScrolled ? "block" : "lg:hidden block"
        }`}
      >
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center focus:outline-none"
        >
          <span
            className={`transform transition-transform duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-0" : ""
            }`}
          >
            <span
              className={`block w-6 h-0.5 bg-white mb-1 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span
              className={`block w-6 h-0.5 bg-white mt-1 transform ${
                isMenuOpen ? "-rotate-90 -translate-y-1.5" : ""
              }`}
            ></span>
          </span>
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-slate-900 text-white z-40 flex items-center justify-center"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <motion.div
              className="flex flex-col items-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  variants={itemVariants}
                  className="my-4"
                >
                  <Link
                    to={item.path}
                    className="text-4xl font-light hover:text-indigo-400 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={itemVariants}
                className="flex space-x-6 mt-12"
              >
                {socialIcons.map(({ Icon, link }, index) => (
                  <a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-indigo-400 transition-colors"
                  >
                    <Icon size={24} />
                  </a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
