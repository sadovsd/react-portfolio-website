import { Link, useLocation } from "react-router-dom";
import { AiOutlineMenuFold } from "react-icons/ai";
import { useState, useEffect } from "react";

const Header = ({ children }) => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Set active link to current pathname when the component mounts.
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);
    console.log("active link is..", link);
  };

  return (
    <div>
      <div className="relative sm:hidden">
        <button
          className="text-black fixed right-6 top-[26px] p-3"
          onClick={toggleMenu}
        >
          {/* <AiOutlineMenuFold /> */}
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div
          className={`fixed top-0 right-0 h-full w-[50%] bg-white z-10 shadow-lg transform transition-transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="pt-20">
            <li className={`py-2 px-4 hover:bg-gray-200 hover:border-l-8 border-[#3b82f6] ${activeLink.startsWith("/resume") ? "border-l-8" : ""}`}>
              <Link
                to="/resume"
                className={`hover:no-underline [font-size:_clamp(12.5px,3vw,23px)] font-normal ${
                  activeLink.startsWith("/resume") ? "active" : ""
                } hover:text-`}
                onClick={() => handleLinkClick("/resume")}
              >
                Resume
              </Link>
            </li>
            <li className={`py-2 px-4 hover:bg-gray-200 hover:border-l-8 border-[#3b82f6] ${activeLink.startsWith("/projects") ? "border-l-8" : ""}`}>
              <Link
                to="/projects"
                className={`hover:no-underline [font-size:_clamp(12.5px,3vw,23px)] font-normal ${
                  activeLink.startsWith("/projects") ? "active" : ""
                }`}
                onClick={() => handleLinkClick("/projects")}
              >
                Projects
              </Link>
            </li>
            <li className={`py-2 px-4 hover:bg-gray-200 hover:border-l-8 border-[#3b82f6] ${activeLink.startsWith("/applications") ? "border-l-8" : ""}`}>
              <Link
                to="/applications"
                className={`hover:no-underline [font-size:_clamp(12.5px,3vw,23px)] font-normal ${
                  activeLink.startsWith("/applications") ? "active" : ""
                }`}
                onClick={() => handleLinkClick("/applications")}
              >
                Applications
              </Link>
            </li>
          </ul>
        </div>

        <div
          className={`fixed inset-0 bg-black opacity-25 z-0 ${
            isMenuOpen ? "block" : "hidden"
          }`}
          onClick={toggleMenu}
        ></div>
      </div>
      <div className="flex ssm:px-4 items-center justify-between sm:justify-center sm:px-4 sm:px-16 py-10 shadow-lg">
        <div  className="flex gap-3 items-center mr-auto pl-[20px]">
          <div className="flex items-center">
            <Link to="/" className="font-semibold whitespace-nowrap hover:opacity-70" onClick={() => handleLinkClick('/')}>
              <img className="w-[30px] h-[30px] rounded-full" src="/logo512.png"/>
            </Link>
            <span className="text-[25px] font-medium ml-[4px] opacity-30">/</span>
            <Link to="/" className="whitespace-nowrap font-semibold text-[24px] inline ml-[4px] cursor-pointer" onClick={() => handleLinkClick('/')}>
              Blog
            </Link>
          </div>
        </div>

        <div className="space-x-4 xs:hidden flex gap-4 sm:gap-8 items-center mr-0 sm:mr-auto">
          <h2 className="!font-extrabold text-xl">
            <Link
              to="/resume"
              className={`hover:no-underline [font-size:_clamp(12.5px,3vw,23px)] font-normal header-link ${
                activeLink.startsWith("/resume") ? "active" : ""
              }`}
              onClick={() => handleLinkClick("/resume")}
            >
              Resume
            </Link>
          </h2>
          <h2 className="!font-extrabold text-xl">
            <Link
              to="/projects"
              className={`hover:no-underline [font-size:_clamp(12.5px,3vw,23px)] font-normal header-link ${
                activeLink.startsWith("/projects") ? "active" : ""
              }`}
              onClick={() => handleLinkClick("/projects")}
            >
              Projects
            </Link>
          </h2>
          <h2 className="!font-extrabold text-xl">
            <Link
              to="/applications"
              className={`hover:no-underline [font-size:_clamp(12.5px,3vw,23px)] font-normal header-link ${
                activeLink.startsWith("/applications") ? "active" : ""
              }`}
              onClick={() => handleLinkClick("/applications")}
            >
              Applications
            </Link>
          </h2>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
