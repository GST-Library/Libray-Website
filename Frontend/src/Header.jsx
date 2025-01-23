import { NavLink } from 'react-router-dom'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Sies_logo from './assets/Header/sies_logo_header.png'

const activeClassName = 'text-s_orange';
const inactiveClassName = 'text-s_blue hover:text-s_blue_400';
const navLinks = [
  {
    to: "/E-Resources",
    text: "E-Resources",
    drop_link: ["/quicklinks#pyq", "/E-Resources", "/E-Resources#university-syllabus", "/E-Resources#academic-calender", "/E-Resources#competitive-exams"],
    drop_name: ["Question Papers", "OER", "DELNET", "IEEE", "OPAC"],
  },
  {
    to: "/about",
    text: "About Us",
    drop_link: ["/about#library-hours", "/about#library-hours", "/about#library-staffs", "/about#infrastructure"],
    drop_name: ["Library Hours", "Library Rules", "Library Staffs", "FAQs"],
  },
  {
    to: "/others",
    text: "Others",
    drop_link: ["/donate-books", "/suggest-books", "/others", "/others", "/about#facilities", "/about#infrastructure"],
    drop_name: ["Donate Books", "Suggest Books", "Book Bank", "Feedback", "Facilities", "Infrastructure"],
  },
];

const StyledNavLink = ({ to, text, drop_link, drop_name, isMobile}) => {
    if (isMobile) {
        return (
            <li className="text-s_blue group cursor-pointer font-medium text-2-Primary mt-8 flex items-center">
              <NavLink
              to={to}
              className={({ isActive }) => `${isActive ? activeClassName : inactiveClassName}`}>
                {text}
                <FontAwesomeIcon icon={faCaretDown} className="px-1.5" />
              </NavLink>
                <MobStyledDropdown
                  to={drop_link}
                  text={drop_name}
                />
              {!isMobile && <StyledDropdown to={drop_link} text={drop_name} />}
            </li>
          );
    }
  return (
    <li className="text-s_blue group relative cursor-pointer font-medium text-Primary m-8 flex items-center">
      <NavLink
        to={to}
        className={({ isActive }) => `${isActive ? activeClassName : inactiveClassName}`}>
        {text}
        <FontAwesomeIcon icon={faCaretDown} className="px-1.5" />
      </NavLink>
      <StyledDropdown to={drop_link} text={drop_name} />
    </li>
  );
};

const StyledDropdown = ({ to, text }) => {
  return (
    <div className="absolute hidden bg-transparent z-10 group-hover:block w-52 top-8 -left-14">
      <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 w-0 h-0 border-l-8 
        border-r-8 border-b-8 border-transparent border-b-s_orange"/>
      <ul className="bg-gray-300 text-center">
        {text.map((item, index) => (
          <li key={index} className="py-3 pl-2 border-b-2 hover:bg-gray-200">
            <CustomLink link={to[index]} name={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const MobStyledDropdown = ({ to, text}) => {
    return (
        <div className=" hidden group-hover:flex w-52 top-8 -left-14">
          <ul className="bg-header-color text-center">
            {text.map((item, index) => (
              <li key={index} className="py-3 pl-2 border-b-2 hover:bg-gray-200">
                <CustomLink link={to[index]} name={item} />
              </li>
            ))}
          </ul>
        </div>
      );
  };

const CustomLink = ({ name, link }) => {
  if (link.startsWith('/')) {
    return <NavLink to={link}>{name}</NavLink>;
  } else {
    return <a href={link} target="_blank" rel="noopener noreferrer">{name}</a>;
  }
};

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <nav className="top-0 z-20 w-full h-fit bg-header-color bg-header-bg bg-top-header bg-cover-header">
      <div className="flex items-center justify-between px-4 lg:px-10 xl:px-30">
        <div className="flex items-center">
          <img src={Sies_logo} alt="SIES Logo" className="h-full" />
        </div>
    return (
      <div className="fixed top-0 z-20 w-full h-32 bg-Navbg">
        <div className="flex items-center justify-between h-full px-4 lg:px-8 xl:px-16 ">
          <div className="flex items-center  ">
            <img src={Sies_logo} alt="SIES Logo" className="h-fit mb-3" />
          </div>

        {/* Hamburger Icon (visible on small screens) */}
        <div className="flex items-center lg:hidden">
          <button onClick={toggleMenu} className="text-Primary text-s_blue">
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>
          {/* Hamburger Icon (visible on small screens) */}
          <div className="flex items-center lg:hidden">
            <button onClick={toggleMenu} className="text-xl text-[#014da1]">
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
            </button>
          </div>

        {/* Desktop Menu (hidden on small screens) */}
        <div className="hidden lg:flex-grow lg:flex items-center justify-between w-full mt-2 pl-48">
          <ul className="flex items-center justify-between w-full font-serif flex-nowrap">
            <li className="text-s_blue cursor-pointer font-medium text-Primary mr-4">
              <NavLink to="" className={({ isActive }) => `${isActive ? activeClassName : inactiveClassName}`}>
                Home
              </NavLink>
            </li>

            {navLinks.map((link, index) => (
              <StyledNavLink
                key={index}
                to={link.to}
                text={link.text}
                drop_link={link.drop_link}
                drop_name={link.drop_name}
                isMobile={false} />
            ))}
          {/* Desktop Menu (hidden on small screens) */}
          <div className="hidden lg:flex-grow lg:flex items-center justify-between w-full mt-2 pl-48">
            <ul className="flex items-center justify-between w-full font-serif flex-nowrap">
              <li className="text-[#014da1] cursor-pointer font-medium text-xl mr-4">
                <NavLink
                  to=""
                  className={({ isActive }) =>
                    `${isActive ? activeClassName : inactiveClassName}`
                  }
                >
                  Home
                </NavLink>
              </li>

              {navLinks.map((link, index) => (
                <StyledNavLink
                  key={index}
                  to={link.to}
                  text={link.text}
                  drop_link={link.drop_link}
                  drop_name={link.drop_name}
                />
              ))}

            <li className="text-s_blue cursor-pointer font-medium text-Primary mr-4">
              <NavLink to="contactus" className={({ isActive }) => `${isActive ? activeClassName : inactiveClassName}`}>
                Contact Us
              </NavLink>
            </li>
              <li className="text-[#014da1] cursor-pointer font-medium text-xl mr-4">
                <NavLink
                  to="contactus"
                  className={({ isActive }) =>
                    `${isActive ? activeClassName : inactiveClassName}`
                  }
                >
                  Contact Us
                </NavLink>
              </li>

            <li>
              <NavLink to="Login" className={({ isActive }) => `${isActive ? activeClassName : inactiveClassName}` }>
                <div className="flex items-center bg-header-color rounded-full px-4 py-2 shadow-md  border-2
                 border-s_blue hover:border-s_orange transform transition duration-500 ease-in-out">
                    <button className=" text-s_blue font-medium mr-4 text-xl hover:text-s_orange active:text-s_orange_400">
                      Login
                    </button>
                    <div class="w-12 h-12 bg-gray-400 hover:cursor-pointer rounded-full flex items-center justify-center text-white text-lg">
                      Pic
                    </div>
                </div>
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
              <li>
                {/* <div className="w-full h-full border-black	bg-orange-500 rounded-full flex	">
                            <button className="bg-white w-17 h-20 rounded-full m-5  ">login </button>
                        </div> */}
                <NavLink
                  to="Login"
                  className={({ isActive }) =>
                    `flex items-center bg-[#f3f2ed] font-serif rounded-full px-4 py-2 shadow-2xl border-2 border-b-2 border-[#014da1] hover:border-[#f26d21] ${
                      isActive ? activeClassName : inactiveClassName
                    }`
                  }
                >
                  <div class="flex items-center w-full cursor-pointer">
                    <span class="text-[#014da1] font-medium mr-4 text-xl hover:active:text-[#f26d21]">
                      Login
                    </span>
                    <div class="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center text-white text-lg">
                      Pic
                    </div>
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

      {/* Mobile Menu (only visible when the hamburger is open) */}
      {isOpen && (
        <div className="lg:hidden">
          <ul className="flex flex-col items-center px-4 py-2 space-y-2">
            <li className="text-s_blue cursor-pointer font-medium text-2-Primary mt-8">
              <NavLink to="" className={({ isActive }) => `${isActive ? activeClassName : inactiveClassName}`}>
                Home
              </NavLink>
            </li>

            {navLinks.map((link, index) => (
              <StyledNavLink
                key={index}
                to={link.to}
                text={link.text}
                drop_link={link.drop_link}
                drop_name={link.drop_name}
                isMobile={true} />
            ))}
        {/* Mobile Menu (only visible when the hamburger is open) */}
        {isOpen && (
          <div className="lg:hidden">
            <ul className="flex flex-col items-start px-4 py-2 space-y-2">
              <li className="text-[#014da1] cursor-pointer font-medium text-xl m-8">
                <NavLink
                  to=""
                  className={({ isActive }) =>
                    `${isActive ? activeClassName : inactiveClassName}`
                  }
                >
                  Home
                </NavLink>
              </li>

              {navLinks.map((link, index) => (
                <StyledNavLink
                  key={index}
                  to={link.to}
                  text={link.text}
                  drop_link={link.drop_link}
                  drop_name={link.drop_name}
                />
              ))}

            <li className="text-s_blue cursor-pointer font-medium text-2-Primary mx-8">
              <NavLink to="contactus" className={({ isActive }) => `${isActive ? activeClassName : inactiveClassName}`}>
                Contact Us
              </NavLink>
            </li>

            <li>
              <div className="flex items-center bg-header-color rounded-full px-4 py-2 shadow-md  border-2	 border-s_blue hover:border-s_orange transform transition duration-500 ease-in-out">
                <button className=" text-s_blue font-medium mr-4 text-xl hover:text-s_orange active:text-s_orange_400">
                  <NavLink to="Login" className={({ isActive }) => `${isActive ? activeClassName : inactiveClassName}` }>
                    Login
                  </NavLink>
                </button>
                <div class="w-12 h-12 bg-gray-400 hover:cursor-pointer rounded-full flex items-center justify-center text-white text-lg">
                  Pic
                </div>
              </div>
            </li>

          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavBar;

              <li className="text-[#014da1] cursor-pointer font-medium text-xl m-8">
                <NavLink
                  to="contactus"
                  className={({ isActive }) =>
                    `${isActive ? activeClassName : inactiveClassName}`
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        )}

        {/* <div className='flex align-center h-12 w-40 bg-orange-400 justify-center rounded-full mt-8 '>
                <Link to='/register'><p className='my-3 '>Register</p></Link>
            </div>
            
            <div className='flex items-center'>
                <img src={user} className='h-12 w-12 mb-4 mx-5 ' alt="" />
            </div> */}
      </div>
    );
}
  
export default NavBar