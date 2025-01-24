import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'; 
import Sies_logo from './assets/Footer/sies_logo_footer.png';
import { NavLink, Link } from 'react-router-dom';

const activeClassName = 'text-s_orange';
const inactiveClassName = "text-white hover:text-s_orange_400";

const sections = [
  {
    title: 'E-Resources',
    to: "/E-Resources",
    links: [
      { name: 'Question Papers', path: '/quicklinks#pyq' },
      { name: 'OER', path: '/E-Resources' },
      { name: 'DELNET', path: '/E-Resources#university-syllabus' },
      { name: 'IEEE', path: '/E-Resources#academic-calender' },
      { name: 'OPAC', path: '/E-Resources#competitive-exams' }
    ]
  },
  {
    title: 'About Us',
    to: "/about",
    links: [
      { name: 'Library Hours', path: '/about#library-hours' },
      { name: 'Library Rules', path: '/about#library-rules' },
      { name: 'Library Staffs', path: '/about#library-staffs' },
      { name: 'FAQs', path: '/about#faqs' }
    ]
  },
  {
    title: 'Others',
    to: "/others",
    links: [
      { name: 'Donate Books', path: '/donate-books' },
      { name: 'Suggest Books', path: '/suggest-books' },
      { name: 'Book Bank', path: '/others#book-bank' },
      { name: 'Feedback', path: '/others#feedback' },
      { name: 'Facilities', path: '/about#facilities' },
      { name: 'Infrastructure', path: '/about#infrastructure' }
    ]
  }
];

const socialIcons = [
  { icon: faInstagram, link: "https://www.instagram.com/siesgstevents" },
  { icon: faFacebook, link: "https://www.facebook.com/SIESGST" },
  { icon: faLinkedin, link: "https://www.linkedin.com/school/sies-graduate-school-of-technology/" },
  { icon: faYoutube, link: "https://youtube.com/@siesgstweb" }
];

function Footer() {

  return (
    <div className="py-12 bg-s_blue overflow-x-hidden">
      <div className="px-6 lg:mx-44">
        <div className="flex flex-wrap justify-between items-start lg:items-center w-full">

          <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-0">
            <img src={Sies_logo} alt="SIES Logo" className="h-full" />
            <div className="flex space-x-6">
              {socialIcons.map((social) => (
                <a key={social.link} href={social.link} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${social.link}`}>
                  <FontAwesomeIcon 
                    className="text-3xl p-3 lg:text-4xl text-white hover:text-s_orange duration-700" 
                    icon={social.icon} 
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Render sections dynamically */}
          <div className="flex flex-cols-1 gap-8 lg:gap-16 lg:flex lg:space-x-16">
            {sections.map((section) => (
              <div key={section.title} className="py-6">
                <NavLink 
                  to={`${section.to}`} 
                  className={({ isActive }) => `${isActive ? activeClassName : inactiveClassName}`}
                  aria-label={`Go to ${section.title} section`}
                >
                  <p className="mb-4 font-serif font-bold text-center hover:text-s_orange_400 lg:text-left">{section.title}</p>
                </NavLink>
                <ul className="font-serif space-y-2">
                  {section.links.map((link) => (
                    <Link key={link.name} to={link.path} aria-label={`Go to ${link.name}`}>
                      <li>
                        <p className={`${inactiveClassName} text-center lg:text-left cursor-pointer`}>{link.name}</p>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-6 space-y-2">
        <p className="text-sm text-gray-400">Developed by Students of SIES GST</p>
        <p className="text-sm text-gray-400">© SIES Graduate School Of Technology. All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
