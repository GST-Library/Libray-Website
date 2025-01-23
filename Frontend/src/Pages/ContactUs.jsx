import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ContactUs() {
  return (
    <div className="mx-40">
      <Link to="/contact"></Link>
      <section className="min-h-screen flex flex-col justify-center font-serif">
        <div className="flex flex-col h-full">
          <header className="text-center mb-4">
            <h1 className="text-4xl font-bold mb-9 border-b-4 border-orange-500 pb-4 h-14 ">
              Contact Us
            </h1>
          </header>
          <div className="flex flex-grow w-full">
            <div className="flex-1 p-8 bg-white border-r border-gray-200">
              {/* Contact Information */}
              <div className="mb-6 flex flex-col items-center gap-4">
                <i className="fas fa-location-dot text-orange-500 text-4xl mb-2"></i>
                <div className="text-center">
                  <h2 className="text-xl font-semibold mb-2">Our Address</h2>
                  <p className="text-lg">
                    SIES Graduate School of Technology Central Library, II
                    floor, (R 204), Sector-5, Nerul, Navi Mumbai-400706
                    Maharashtra, India
                  </p>
                </div>
              </div>

              {/* Librarian Information */}
              <div className="mb-6 flex flex-col items-center gap-4">
                <i className="fas fa-user text-orange-500 text-4xl mb-2"></i>
                <div className="text-center">
                  <h2 className="text-xl font-semibold mb-2">Librarian</h2>
                  <p className="text-lg font-semibold">
                    Ms. Arunadevi S Lingam
                  </p>
                  <p className="text-lg">Tel: +91 22 6108 2409</p>
                  <p className="text-lg">Email: librariansgst@sies.edu.in</p>
                </div>
              </div>

              {/* Staff Information */}
              <div className="mb-6 flex flex-col items-center gap-4">
                <i className="fas fa-users text-orange-500 text-4xl mb-2"></i>
                <div className="text-center">
                  <h2 className="text-xl font-semibold mb-2">
                    Librarian Staff
                  </h2>
                  <p className="text-lg font-semibold">Mr. Sandip Patil</p>
                  <p className="text-lg">Email: sandipp@sies.edu.in</p>
                  <p className="text-lg font-semibold mt-2">Mr. Sachin Gurav</p>
                  <p className="text-lg">Email: sachingurav@rediff.com</p>
                  <p className="text-lg mt-2">Tel: +91 22 6108 2455</p>
                  <p className="text-lg mt-2 font-semibold">
                    Mr. Indrabahadur Singh
                  </p>
                </div>
              </div>
            </div>

            {/* <!-- Contact Form --> */}
            <div className="flex-1 p-8 bg-white">
              <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
              <form action="#" method="POST" className="flex flex-col gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className=" font-medium text-gray-800 text-lg"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-lg font-medium text-gray-800"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="text-lg font-medium text-gray-800"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:border-blue-500 focus:outline-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="p-3 bg-orange-500 text-white rounded-lg text-lg hover:bg-orange-600 focus:outline-none"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
