import Images from '../assets/HomePage/img5.webp'
import sand from '../assets/AboutUs/sandip.webp'
import indra from '../assets/AboutUs/indrabahadur.webp'
import sac from '../assets/AboutUs/sachin.webp'
import ref from '../assets/HomePage/img4.webp'
import ret from '../assets/AboutUs/bookret.webp'
import fac from '../assets/HomePage/img9.webp'
import repo from '../assets/HomePage/img3.webp'
import opa from '../assets/HomePage/img11.webp'
import idi from '../assets/HomePage/img6.webp'
import comp from '../assets/HomePage/img12.webp'
import dig from '../assets/HomePage/image1.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useScrollToHash, useSmoothScroll} from '../Navigation'
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { Helmet } from 'react-helmet';

const facilities = [
    { image: ref, title: "Reference Service" },
    { image: ret, title: "Home Issue/Book Return" },
    { image: fac, title: "Book Bank Facility" },
    { image: repo, title: "Reprography Service" },
    { image: opa, title: "Library OPAC" },
    { image: fac, title: "Newspaper Clipping" },
];

const FacilityCard = ({ image, title }) => (
    <div className="bg-white rounded-xl overflow-hidden hover:scale-105 duration-700">
        <img src={image} className="h-60 w-full object-cover" alt={title} />
        <div className="p-6">
            <h3 className="text-xl font-extrabold text-s_orange">{title}</h3>
        </div>
    </div>
);

const staffMembers = [
    {
        name: "Mr. Sandip Patil",
        position: "Library Clerk",
        qualifications: "M.A, B.Ed., M.L.I.Sc",
        image: sand,
        alt: "Library Clerk"
    },
    {
        name: "Mr. Sachin Gurav",
        position: "Library Attendant",
        qualifications: "M.L.I.c",
        image: sac,
        alt: "Library Attendant"
    },
    {
        name: "Mr. Indrabahadur Singh",
        position: "Library Attendant",
        qualifications: "10TH",
        image: indra,
        alt: "Library Attendant"
    }
];

const StaffCard = ({ name, position, qualifications, image, alt }) => (
    <div className="bg-white rounded-xl overflow-hidden hover:scale-105 duration-700 w-full sm:w-[300px] lg:w-[320px]">
        <img src={image} className="w-full h-[250px] object-cover" alt={alt} />
        <div className="p-6">
            <h3 className="text-2xl font-extrabold text-s_orange">{position}</h3>
            <p className="font-bold text-s_orange mt-2">{name}</p>
            <p className="font-semibold text-s_orange">{qualifications}</p>
        </div>
    </div>
);

const infrastructureData = [
    {
        image: idi,
        title: "Network Infrastructure",
        points: [
            "High-Speed Internet", 
            "Secure Wi-Fi for students and staff"
        ],
    },
    {
        image: comp,
        title: "Hardware Infrastructure",
        points: [
            "Computing devices for catalog browsing",
            "ID card scanning attendance system",
        ],
    },
    {
        image: dig,
        title: "Digital Library",
        points: [
            "E-book and digital resource management",
            "Integration with external repositories",
            "Remote access to resources",
        ],
    },
];

const InfrastructureCard = ({ image, title, points }) => (
    <div className="bg-white rounded-xl overflow-hidden hover:scale-105 duration-700 w-[280px] sm:w-[300px]">
        <img src={image} className="h-60 w-full object-cover" alt={title} />
        <div className="p-6">
            <h3 className="text-2xl font-extrabold text-s_orange">{title}</h3>
            <ul className="list-disc list-inside mt-2 text-s_orange">
                {points.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>
        </div>
    </div>
);

export default function AboutUs() {

    useSmoothScroll();
    const refs = useScrollToHash(['library-hours','library-staffs','facilities']);

    return (
        <div className='w-full h-full overflow-x-hidden'>

            <Helmet>
                <title>About Us | Library | SIESGST</title>
            </Helmet>

            {/* About us */}
            <div className='bg-gray-100 flex items-center justify-center py-8 sm:py-12 md:py-16'>
                <div>
                    <div className='flex justify-center text-4xl sm:text-5xl md:text-6xl font-bold text-s_blue'>
                        <p>About Us</p>
                    </div>
                    <div className="border-b-4 mx-auto w-32 sm:w-44 mt-2 border-s_orange"/>
                </div>
            </div>

            {/* Library Hours */}
            <div className="p-5 sm:p-10 mx-4 sm:mx-10 md:mx-20 lg:mx-40 flex flex-col items-center">
                <div>
                    {/* Heading */}
                    <div className="flex justify-center text-2xl sm:text-3xl md:text-4xl font-bold">
                        <p>Library Hours</p>
                    </div>
                    <div className="border-b-4 mx-auto w-24 sm:w-28 md:w-36 mt-2 border-blue-700 mb-5 sm:mb-10"></div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col sm:flex-row justify-between items-center text-base sm:text-lg md:text-xl bg-header-color w-full rounded-xl my-5 sm:my-10 hover:scale-105 hover:shadow-2xl duration-700">
                    {/* Image Section */}
                    <div className="m-5 sm:m-10 px-5 w-full sm:w-5/12 flex justify-center">
                        <img className="w-full sm:w-auto h-40 sm:h-60 md:h-72 rounded-xl shadow-lg" src={Images} alt="Library Hours" />
                    </div>

                    {/* Text Section */}
                    <div className='w-full sm:w-7/12 p-5 md:mr-10'>
                        <div className="text-2xl font-bold text-s_orange flex items-center pb-6">
                            <FontAwesomeIcon icon={faClock} className="pr-2 text-s_orange" />
                            Operating Hours
                        </div>
                        <div className="text-left space-y-4 ml-">
                            <div className="">
                                <p className="font-semibold">Monday To Saturday</p>
                                <p className="text-sm sm:text-base">8:00 AM To 7:00 PM</p>
                                <p className="text-sm sm:text-base">(Circulation Time 9:00 AM To 5:00 PM)</p>
                            </div>
                            <div className="">
                                <p className="font-semibold">Saturdays</p>
                                <p className="text-sm sm:text-base">9:00 AM To 2:00 PM</p>
                            </div>
                            <div className="">
                                <p className="font-semibold">Closed On Sundays, Public Holidays</p>
                                <p className="font-semibold">2nd and 4th Saturdays Closed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Library Staffs */}
            <div ref={refs['library-staffs']} id="library-staffs" className="  bg-gray-100 py-10">
                {/* Heading */}
                <div>
                    <div className="flex justify-center text-2xl sm:text-3xl md:text-4xl font-bold">
                        <p>Library Staffs</p>
                    </div>
                    <div className="border-b-4 mx-auto w-24 sm:w-28 md:w-36 mt-2 border-blue-700 mb-5 sm:mb-10"></div>
                </div>

                {/* Library Staffs Section */}
                <div className="shadow-2xl rounded-xl flex flex-wrap justify-center items-center gap-6 lg:gap-8 p-5 sm:p-10 sm:mx-10 md:mx-20 lg:mx-40 bg-s_blue_400">
                    {staffMembers.map((staff, index) => (
                        <StaffCard 
                            key={index} 
                            name={staff.name} 
                            position={staff.position} 
                            qualifications={staff.qualifications} 
                            image={staff.image} 
                            alt={staff.alt} 
                        />
                    ))}
                </div>
            </div>

            {/* Facilities Section */}
            <div ref={refs['facilities']} id="facilities" className='py-10'>
                {/* Heading */}
                <div>
                    <div className="flex justify-center text-2xl sm:text-3xl md:text-4xl font-bold">
                        <p>Library Facilities</p>
                    </div>
                    <div className="border-b-4 mx-auto w-24 sm:w-28 md:w-36 mt-2 border-blue-700 mb-5 sm:mb-10"></div>
                </div>

                <div className="bg-s_blue_400 shadow-2xl rounded-xl mx-5 sm:mx-10 md:mx-20 lg:mx-40 py-6 sm:py-12 flex flex-wrap justify-center gap-8">
                    {facilities.map((facility, index) => (
                        <FacilityCard key={index} image={facility.image} title={facility.title} />
                    ))}
                </div>
            </div>

            {/* Infrastructure Section */}
            <div ref={refs['infrastructure']} id="infrastructure"  className="py-10 bg-gray-100">
                {/* Heading */}
                <div>
                    <div className="flex justify-center text-2xl sm:text-3xl md:text-4xl font-bold">
                        <p>Infrastructure</p>
                    </div>
                    <div className="border-b-4 mx-auto w-24 sm:w-28 md:w-36 mt-2 border-blue-700 mb-5 sm:mb-10"></div>
                </div>

                {/* Infrastructure Details */}
                <div className="bg-s_blue_400 shadow-2xl rounded-xl mx-5 sm:mx-10 md:mx-20 lg:mx-40 py-6 sm:py-12 flex flex-wrap justify-center gap-8">
                    {infrastructureData.map((infra, index) => (
                        <InfrastructureCard
                            key={index}
                            image={infra.image}
                            title={infra.title}
                            points={infra.points}
                        />
                    ))}
                </div>
            </div>

        </div>
    )
}

