import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Helmet } from 'react-helmet';
import '../css/form.css';

export default function ContactUs() {
  return (
    <div className='mx-40'>
        <Link to='/contact'>
        </Link>
        <Helmet>
                <title>Others | Library | SIESGST</title>
            </Helmet>
        <section className="min-h-screen flex flex-col justify-center font-serif">
        <div className="flex flex-col h-full">
            <header className="text-center mb-4">
            <h1 className="text-4xl font-bold mb-9 border-b-4 border-orange-500 pb-4 h-14 ">Contact Us</h1>

            </header>
            <div className="flex flex-grow w-full">
                <div className="flex-1 p-8 bg-white border-r border-gray-200">
                    {/* <!-- Contact Information --> */}
                    <div className="mb-6 flex items-start gap-6">
                    <FontAwesomeIcon className='text-orange-500 text-2xl' icon="fa-solid fa-location-dot" /> 
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Our Address</h2>
                            <p>Sies Graduate School of Technology, Nerul EAST, Mumbai, Maharashtra, 440004</p>
                        </div>
                    </div>
                    
                    <div className="mb-6 flex items-start gap-2">
                    <FontAwesomeIcon className='text-orange-500 text-2xl' icon="fa-solid fa-clock " /> 
                        <i className="fas fa-clock text-orange-500 text-2xl"></i>
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Operating Hours</h2>
                            <p>Monday-Friday 9:00 am to 5:00 pm</p>
                            <p>Saturday-Sunday: Closed</p>
                        </div>
                    </div>
                    
                    <div className="mb-6 flex items-start gap-2">
                    <FontAwesomeIcon className='text-orange-500 text-2xl' icon="fa-solid fa-phone" /> 
                        <i className="fas fa-phone text-orange-500 text-2xl"></i>
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Phone Number</h2>
                            <p>9574937689</p>
                        </div>
                    </div>
                    
                    <div className="mb-6 flex items-start gap-2">
                    <FontAwesomeIcon className='text-orange-500 text-2xl' icon="fa-solid fa-location-dot" /> 
                        <i className="fas fa-envelope text-orange-500 text-2xl"></i>
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Email Address</h2>
                            <p>siesgstnerul@college.edu</p>
                        </div>
                    </div>
                </div>
                
                {/* <!-- Contact Form --> */}
                <div className="flex-1 p-8 bg-white">
                    <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
                    <form action="#" method="POST" className="flex flex-col gap-4">
                        <div>
                            <label htmlFor="name" className="text-sm font-medium text-gray-800">Your Name</label>
                            <input type="text" id="name" name="name" required className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:border-blue-500 focus:outline-none"/>
                        </div>
                        <div>
                            <label htmlFor="email" className="text-sm font-medium text-gray-800">Your Email</label>
                            <input type="email" id="email" name="email" required className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:border-blue-500 focus:outline-none"/>
                        </div>
                        <div>
                            <label htmlFor="message" className="text-sm font-medium text-gray-800">Message</label>
                            <textarea id="message" name="message" required rows="4" className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:border-blue-500 focus:outline-none"></textarea>
                        </div>
                        <button type="submit" className="p-3 bg-orange-500 text-white rounded-lg text-lg hover:bg-orange-600 focus:outline-none">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
        </section>
   

      
    </div>
  )
}