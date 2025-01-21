import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import event1 from '../assets/Others/event_1.jpg'
import event2 from '../assets/Others/event_2.jpg'
import event3 from '../assets/Others/event_3.png'
import event4 from '../assets/Others/event_4.jpg'
import { useSmoothScroll } from '../Navigation'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';


const moreLinks = [
    { name: "National Digital Library", url: "https://ndl.iitkgp.ac.in" },
    { name: "SWAYAM Online Courses", url: "https://storage.googleapis.com/uniquecourses/online.html" },
    { name: "National Knowledge Network", url: "http://nkn.gov.in/en" },
    { name: "NPTEL", url: "https://nptel.ac.in" },
    { name: "AICTE: NEAT", url: "https://neat.aicte-india.org/" },
    { name: "AICTE: ELIS portal", url: "http://free.aicte-india.org/" },
    { name: "InfoPort", url: "https://infoport.inflibnet.ac.in" },
    { name: "Talks to Teacher", url: "https://www.ted.com/playlists/182/talks_from_inspiring_teachers" },
    { name: "A-VIEW", url: "http://aview.in" },
    { name: "Virtual Labs", url: "http://www.vlab.co.in/" },
    { name: "FOSSEE", url: "https://fossee.in" },
    { name: "Spoken Tutorial", url: "https://spoken-tutorial.org/" },
    { name: "e-Yantra", url: "https://www.e-yantra.org/" },
    { name: "Oscar++", url: "https://www.it.iitb.ac.in/oscar/" },
    { name: "E-Kalpa", url: "https://icar.org.in/content/e-kalpa" },
    { name: "NCERT Text Books", url: "http://ncert.nic.in/textbook/textbook.htm" },
    { name: "UG/PG MOOCs", url: "http://ugcmoocs.inflibnet.ac.in/ugcmoocs/" },
    { name: "e-PG Pathshala", url: "https://epgp.inflibnet.ac.in" },
    { name: "e-Content courseware in UG subjects", url: "http://eec.nic.in/eec/" },
    { name: "SWAYAMPRABHA", url: "https://www.swayamprabha.gov.in" },
    { name: "e-Shodh Sindhu", url: "https://ess.inflibnet.ac.in" },
    { name: "Vidwan", url: "https://saksht.ac.in/?project=vidwan" },
    { name: "SNLTR", url: "https://nltr.org/" },
    { name: "National Educational Alliance for Technology", url: "https://neat.aicte-india.org/" },
    { name: "Coursera for Campus", url: "https://www.coursera.org/coronavirus" },
    { name: "TCS iON Digital Glass Room", url: "https://learning.tcsionhub.in/hub/glass-room/" },
    { name: "ELIS portal", url: "http://free.aicte-india.org/" },
    { name: "MTUTOR Digital eLearning", url: "https://www.m-tutor.com/" },
    { name: "Design your Solar Systems for Homes", url: "https://www.aicte-india.org/sites/default/files/Design%20your%20Solar%20Systems%20for%20Homes.pdf" },
    { name: "SOS", url: "http://sos-tools.org/" },
    { name: "National Mission on Education", url: "https://www.it.iitb.ac.in/nmeict/home.html" },
    { name: "QUANTUM & NANO COMPUTING", url: "https://www.dei.ac.in/dei/quantumNano/" },
    { name: "DIGITAL LIBRARY INFLIBNET", url: "https://ess.inflibnet.ac.in" },
    { name: "Smart India Hackathon", url: "https://www.sih.gov.in/" },
    { name: "YOUTH4WORK", url: "https://www.youth4work.com/onlinetalenttest" },
    { name: "IEEE RESOURCES - DIGITAL LIBRARY", url: "https://ieeexplore.ieee.org/courses/details/EDP333" },
    { name: "National Apprenticeship Training Scheme", url: "http://mhrdnats.gov.in" },
    { name: "AAKASH EDUCATIONAL PORTAL", url: "https://www.it.iitb.ac.in/nmeict/home.html" },
    { name: "SAKSHAT", url: "https://saksht.ac.in/" },
    { name: "AICTE Training And Learning (ATAL) Academy", url: "https://www.aicte-india.org/atal" },
    { name: "AICTE Collaborations (MoU)", url: "https://www.aicte-india.org/education/collaborations" },
];

const events = [
    {
        text: 'User Orientation',
        img: event1,
        content: "This event is organized to familiarize new students with the library’s resources, services, and policies. It includes a guided tour of the library, an introduction to the digital resources (e-journals, databases), and how to use the OPAC system for book searches."
    },
    {
        text: 'Book Exhibition',
        img: event2,
        content: "The library periodically hosts book exhibitions showcasing new arrivals, important academic texts, and rare collections. This event is aimed at promoting reading habits and awareness of the latest publications."
    },
    {
        text: 'National Library Day',
        img: event3,
        content: "Celebrated annually to honor the contributions of libraries in education, this event features guest lectures, workshops, and interactive sessions highlighting the role of libraries in fostering knowledge."
    },
    {
        text: 'IEEE Day',
        img: event4,
        content: "Organized in collaboration with IEEE, this event includes workshops, seminars, and presentations on recent developments in technology and engineering. Students and faculty are encouraged to explore the IEEE digital library for research and academic purposes."
    },
];


const faqs = [
    {
        title: "Who can access the library?",
        details: [
            "All SIES GST students, faculty, and staff can access the library with a valid ID."
        ]
    },
    {
        title: "What are the library timings?",
        details: [
            "Monday to Friday: 9 AM to 5 PM.",
            "Saturday: 9 AM to 1 PM."
        ]
    },
    {
        title: "How many books can I borrow?",
        details: [
            "Students can borrow up to 3 books for 15 days.",
            "Faculty can borrow up to 5 books."
        ]
    },
    {
        title: "How can I renew a book?",
        details: [
            "Books can be renewed online or in-person before the due date.",
            "Renewals are subject to availability."
        ]
    },
    {
        title: "Does the library offer digital resources?",
        details: [
            "Yes, access to e-journals, databases (IEEE, DELNET), and e-books is available."
        ]
    },
    {
        title: "What is the fine for late returns?",
        details: [
            "A nominal fine is charged per day for overdue books."
        ]
    },
    {
        title: "How can I suggest a book for the library?",
        details: [
            "Use the Suggest Books form available on the website."
        ]
    },
    {
        title: "Can I donate books?",
        details: [
            "Yes, donations are accepted through the Donate Books section."
        ]
    },
    {
        title: "Does the library provide internet access?",
        details: [
            "Yes, free Wi-Fi is available within the library premises."
        ]
    },
    {
        title: "How do I access the plagiarism detection tool?",
        details: [
            "The tool can be accessed through the Plagiarism Tool section of the website."
        ]
    }
];

const sections = [
    {
        title: "IEEE",
        content: "The GRE assesses readiness for graduate programs through verbal, quantitative, and analytical writing tests.",
        link: { text: 'Click here for more information', url: 'https://www.ets.org/gre.html' }
    },
    {
        title: "GATE",
        content: "GATE evaluates knowledge in engineering and science subjects for admissions to postgraduate programs and for various public sector job roles in India.",
        link: { text: 'Click here for more information', url: 'http://gate.iitd.ac.in/' }
    },
    {
        title: "SAT",
        content: "The SAT is a college admission test that assesses a student's readiness for higher education through math, reading, and writing sections.",
        link: { text: 'Click here for more information', url: 'https://satsuite.collegeboard.org/sat' }
    },
    {
        title: "TOEFL",
        content: "TOEFL measures English language proficiency for non-native speakers, assessing reading, writing, listening, and speaking skills for academic purposes.",
        link: { text: 'Click here for more information', url: 'https://www.ets.org/toefl.html' }
    }
];



const FaqItem = ({ title, details }) => (
    <div className="relative group">
        <div className="bg-header-color text-xl sm:text-2xl py-5 px-6 sm:px-10 flex justify-between my-5 shadow-xl rounded-xl duration-700">
            <p>{title}</p>
            <FontAwesomeIcon
                className="text-2xl text-s_orange transition-transform group-hover:rotate-180 duration-700"
                icon={faChevronDown}
            />
        </div>
        <div className="max-h-0 group-hover:max-h-[500px] shadow-xl mb-5 duration-700 rounded-xl overflow-hidden">
            <div className="opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 duration-700 transition-all text-sm sm:text-xl flex-col content-center mx-10 my-3">
                {details.map((detail, index) => (
                    <p key={index} className="py-2">{detail}</p>
                ))}
            </div>
        </div>
    </div>
);

const CollapsibleSection = ({ title, content, link }) => (
    <div className="relative group">
        <div className="flex justify-between px-10 py-5 my-5 text-2xl duration-700 bg-blue-700 shadow-xl rounded-xl">
            <p className='text-white'>{title}</p>
            <FontAwesomeIcon className="text-2xl text-s_orange" icon={faChevronDown} />
        </div>
        <div className="max-h-0 mb-5 overflow-hidden duration-700 shadow-xl group-hover:max-h-[500px] rounded-xl">
            <div className="flex-col content-center mx-10 my-3 text-xl transition-all duration-700 transform opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                <p className="py-2 text-lg">{content}</p>
                <p className="py-2 text-lg">
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className='underline text-s_orange'>
                        {link.text}
                    </a>
                </p>
            </div>
        </div>
    </div>
);

const MoreLinksSection = ({ moreLinks }) => {
    return (
        <div className="relative group">
            <div className="flex justify-between px-10 py-5 my-5 text-2xl duration-700 bg-blue-700 shadow-xl rounded-xl">
                <p className='text-white'>More Links</p>
                <FontAwesomeIcon className="text-2xl text-s_orange" icon={faChevronDown} />
            </div>
            <div className="more-links max-h-0 mb-5 overflow-hidden duration-700 shadow-xl group-hover:max-h-[500px] rounded-xl">
                <div className="grid grid-cols-3 gap-0 auto-rows-min content-center mx-10 my-3 text-base transition-all transform opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                    {moreLinks.map((link, index) => (
                        <div key={index} className='grid my-2'>
                            <a href={link.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-s_orange">
                                {link.name}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default function Journals(){
    useSmoothScroll();
    const [activeIndex, setActiveIndex] = useState(0);
    const handleClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className='overflow-x-hidden w-full h-full'>

            <Helmet>
                <title>Others | Library | SIESGST</title>
            </Helmet>

            {/* Others */}
            <div className='bg-gray-100 flex items-center justify-center py-8 sm:py-12 md:py-16'>
            <div>
                <div className='flex justify-center text-4xl sm:text-5xl md:text-6xl font-bold text-s_blue'>
                <p>Others</p>
                </div>
                <div className="border-b-4 mx-auto w-32 sm:w-44 mt-2 border-s_orange"/>
            </div>
            </div>

            {/* Events */}
            <div className='mx-5 sm:mx-10 md:mx-40'>
                <div className='pt-8'>
                    {/* Heading */}
                    <div className='flex justify-center text-2xl sm:text-3xl md:text-4xl font-bold'>
                        <p>Events</p>
                    </div>
                    <div className="border-b-4 mx-auto w-24 sm:w-28 md:w-36 mt-2 border-blue-700 mb-10"></div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between md:space-x-10">
                    {/* Event Names (on the left side) */}
                    <div className="flex flex-col items-center md:items-start my-5">
                        {events.map((event, index) => (
                            <button
                                key={index}
                                className={`w-64 sm:w-80 md:w-96 bg-blue-700 py-4 px-6 text-lg sm:text-2xl md:text-3xl rounded-r-full mb-2 transition-transform duration-300 text-white h-fit ${
                                    activeIndex === index ? 'scale-110 text-orange-600 bg-blue-500 shadow-lg shadow-black/50' : ''
                                }`}
                                onClick={() => handleClick(index)}
                            >
                                {event.text}
                            </button>
                        ))}
                    </div>

                    {/* Event Details (on the right side) */}
                    <div className="flex-grow w-full mt-5 md:mt-0 py-6">
                        {activeIndex !== null && (
                            <div className="flex flex-col sm:flex-row bg-gray-100 p-5 rounded-md shadow-md transition-transform duration-500 transform hover:scale-105">
                                <img
                                    src={events[activeIndex].img}
                                    alt={events[activeIndex].text}
                                    className="w-full sm:w-60 sm:h-60 object-cover mr-0 sm:mr-5 mb-4 sm:mb-0"
                                />
                                <p className="text-gray-700 text-lg sm:text-xl md:text-2xl">{events[activeIndex].content}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* More */}
            <div className='px-5 sm:px-10 md:px-40 bg-gray-100'>
                <div className='pt-8'>
                    {/* Heading */}
                    <div className='flex justify-center text-2xl sm:text-3xl md:text-4xl font-bold'>
                        <p>More</p>
                    </div>
                    <div className="border-b-4 mx-auto w-24 sm:w-28 md:w-36 mt-2 border-blue-700 mb-10"></div>
                </div>
                <div className='w-full'>
                    <MoreLinksSection moreLinks={moreLinks} />
                    {sections.map((section, index) => (
                        <CollapsibleSection
                            key={index}
                            title={section.title}
                            content={section.content}
                            link={section.link}
                        />
                    ))}
                </div>
            </div>

            {/* FAQs */}
            <div className='mx-5 sm:mx-10 md:mx-40'>
                <div className='pt-8'>
                    {/* Heading */}
                    <div className='flex justify-center text-2xl sm:text-3xl md:text-4xl font-bold'>
                        <p>FAQs</p>
                    </div>
                    <div className="border-b-4 mx-auto w-24 sm:w-28 md:w-36 mt-2 border-blue-700 mb-10"></div>
                </div>
                <div className='w-full'>
                    {faqs.map((faqs, index) => (
                        <FaqItem key={index} title={faqs.title} details={faqs.details} />
                    ))}
                </div>
            </div>
            
                
    </div>
    )
}
