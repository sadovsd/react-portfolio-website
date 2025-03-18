import { Link, useLocation } from "react-router-dom";
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
          <li className={`py-2 px-4 hover:bg-gray-200 hover:border-l-8 ${activeLink === "/" ? "border-l-8" : ""}`}>
              <Link
                to="/"
                className={`hover:no-underline [font-size:_clamp(12.5px,3vw,23px)] font-normal ${
                  activeLink === "/" ? "active" : ""
                } hover:text-`}
                onClick={() => handleLinkClick("/")}
              >
                Home
              </Link>
            </li>
            {/* <li className={`py-2 px-4 hover:bg-gray-200 hover:border-l-8 border-[#3b82f6] ${activeLink.startsWith("/resume") ? "border-l-8" : ""}`}> */}
            <li className={`py-2 px-4 hover:bg-gray-200 hover:border-l-8 ${activeLink.startsWith("/resume") ? "border-l-8" : ""}`}>

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
            <li className={`py-2 px-4 hover:bg-gray-200 hover:border-l-8 ${activeLink.startsWith("/projects") ? "border-l-8" : ""}`}>
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
            {/* <li className={`py-2 px-4 hover:bg-gray-200 hover:border-l-8 border-[#3b82f6] ${activeLink.startsWith("/applications") ? "border-l-8" : ""}`}>
              <Link
                to="/applications"
                className={`hover:no-underline [font-size:_clamp(12.5px,3vw,23px)] font-normal ${
                  activeLink.startsWith("/applications") ? "active" : ""
                }`}
                onClick={() => handleLinkClick("/applications")}
              >
                Applications
              </Link>
            </li> */}
          </ul>
        </div>

        <div
          className={`fixed inset-0 bg-black opacity-25 z-0 ${
            isMenuOpen ? "block" : "hidden"
          }`}
          onClick={toggleMenu}
        ></div>
      </div>
      {/* <div className="flex justify-between shadow-lg ssm:pr-4 ssm:pl-8 sm:px-16 py-10 items-center"> */}
      {/* <div className="flex justify-between shadow-lg ssm:px-20 sm:px-48 py-10 items-center"> */}
      <div className="flex justify-between shadow-lg py-10 items-center [@media(min-width:150px)]:px-20 [@media(min-width:640px)]:px-20 [@media(min-width:900px)]:px-48">


        <div  className="">
          <div className="flex items-center">
            <Link to="/" className="font-semibold whitespace-nowrap hover:opacity-70" onClick={() => handleLinkClick('/')}>
              <img className="w-[30px] h-[30px] rounded-full" src="./images/logo512.png" alt="App logo"/>
            </Link>
            <span className="text-[25px] font-medium ml-[4px] opacity-30">/</span>
            <Link to="/" className="whitespace-nowrap font-semibold text-[24px] inline ml-[4px] cursor-pointer" onClick={() => handleLinkClick('/')}>
              portfolio
            </Link>
          </div>
        </div>

        <div className="space-x-4 xs:hidden flex gap-4 sm:gap-8">
        <h2 className="!font-extrabold text-xl">
            <Link
              to="/"
              className={`hover:no-underline [font-size:_clamp(12.5px,3vw,21px)] font-normal header-link ${
                activeLink === "/" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("/")}
            >
              Home
            </Link>
          </h2>
          <h2 className="!font-extrabold text-xl">
            <Link
              to="/resume"
              className={`hover:no-underline [font-size:_clamp(12.5px,3vw,21px)] font-normal header-link ${
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
              className={`hover:no-underline [font-size:_clamp(12.5px,3vw,21px)] font-normal header-link ${
                activeLink.startsWith("/projects") ? "active" : ""
              }`}
              onClick={() => handleLinkClick("/projects")}
            >
              Projects
            </Link>
          </h2>
          {/* <h2 className="!font-extrabold text-xl">
            <Link
              to="/applications"
              className={`hover:no-underline [font-size:_clamp(12.5px,3vw,21px)] font-normal header-link ${
                activeLink.startsWith("/applications") ? "active" : ""
              }`}
              onClick={() => handleLinkClick("/applications")}
            >
              Applications
            </Link>
          </h2> */}
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
