import {NavLink} from 'react-router-dom'
import { useState } from 'react';
import { StyledNavLink } from './Navigation.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Sies_logo from './assets/sies_logo_header.png'
// import user from './assets/user_icon.png'
// import { Link } from 'react-router-dom'


// const Scholarship = "https://scholarships.gov.in/"
// const Research_fund = "https://www.aicte-india.org/opportunities/students/research-funds"
const activeClassName = 'text-[#f26d21]';
const inactiveClassName = 'text-[#014da1] hover:text-blue-400';
const navLinks = [
    {
      to: "/academics",
      text: "E-Resources",
      drop_link: ["/quicklinks#pyq", "/academics", "/academics#university-syllabus", "/academics#academic-calender", "/academics#competitive-exams"],
      drop_name: ["Question Papers", "OER", "DELNET", "IEEE", "OPAC"],
    },
    {
      to: "/about",
      text: "About Us",
      drop_link: [ "/about#library-hours", "/about#library-hours", "/about#library-staffs", "/about#infrastructure"],
      drop_name: ["Library Hours", "Library Rules", "Library Staffs", "FAQs"],
    },
    // {
    //   to: "/quicklinks",
    //   text: "Quick Links",
    //   drop_link: ["/quicklinks#pyq", "/donate-books", "/suggest-books", "Scholarship", "Research_fund", "/quicklinks#lib-brochure"],
    //   drop_name: ["PYQs",  "Donate Books",  "Suggest Books",  "Scholarships",  "Research Funds",  "Library Brochure"]
    // },
    {
      to: "/others",
      text: "Others",
      drop_link: ["/donate-books", "/suggest-books", "/others", "/others", "/about#facilities", "/about#infrastructure"],
      drop_name: ["Donate Books", "Suggest Books", "Book Bank", "Feedback", "Facilities", "Infrastructure"],
    },
  ];

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
      <div className='fixed top-0 z-20 w-full h-32 bg-Navbg'>

            <div className='flex items-center justify-between h-full px-4 lg:px-8 xl:px-16 '>
                <div className='flex items-center  '>
                    <img src={Sies_logo} alt="SIES Logo" className='h-fit mb-3' />
                </div>

            {/* Hamburger Icon (visible on small screens) */}
            <div className='flex items-center lg:hidden'>
                    <button onClick={toggleMenu} className="text-xl text-[#014da1]">
                        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
                    </button>
                </div>

            {/* Desktop Menu (hidden on small screens) */}
            <div className='hidden lg:flex-grow lg:flex items-center justify-between w-full mt-2 pl-48'>
                <ul className='flex items-center justify-between w-full font-serif flex-nowrap'>

                    <li className='text-[#014da1] cursor-pointer font-medium text-xl mr-4'>
                        <NavLink to='' className={({ isActive }) => 
                            `${isActive ? activeClassName : inactiveClassName}`
                            }>Home</NavLink>
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

                    <li className='text-[#014da1] cursor-pointer font-medium text-xl mr-4'>
                        <NavLink to='contactus' className={({ isActive }) => 
                            `${isActive ? activeClassName : inactiveClassName}`
                            }>Contact Us</NavLink>
                    </li>

                    <li>
                        {/* <div className="w-full h-full border-black	bg-orange-500 rounded-full flex	">
                            <button className="bg-white w-17 h-20 rounded-full m-5  ">login </button>
                        </div> */}
                        <div class="flex items-center  bg-[#f3f2ed] font-serif rounded-full px-4 py-2 shadow-md">
                                <button class=" text-[#014da1] font-medium mr-4 text-xl hover: active:text-[#f26d21]">Login</button>
                                <button class="w-10 h-10 bg-gray-400  rounded-full flex items-center justify-center text-white text-lg">Pic
                                </button>
                        </div>

                    </li>

                </ul>
            </div>
            </div>

            {/* Mobile Menu (only visible when the hamburger is open) */}
            {isOpen && (
                <div className='lg:hidden'>
                    <ul className='flex flex-col items-start px-4 py-2 space-y-2'>
                        
                    <li className='text-[#014da1] cursor-pointer font-medium text-xl m-8'>
                        <NavLink to='' className={({ isActive }) => 
                            `${isActive ? activeClassName : inactiveClassName}`
                            }>Home</NavLink>
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

                    <li className='text-[#014da1] cursor-pointer font-medium text-xl m-8'>
                        <NavLink to='contactus' className={({ isActive }) => 
                            `${isActive ? activeClassName : inactiveClassName}`
                            }>Contact Us</NavLink>
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
    )
}
  
export default NavBar