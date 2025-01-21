import { useSmoothScroll } from '../Navigation';
import '../css/form.css';
import { Helmet } from 'react-helmet';

const currentYear = new Date().getFullYear();

// Scroll to the middle of the page for invalid inputs
const scrollToMiddle = (element) => {
  const offset = window.innerHeight / 2 - element.getBoundingClientRect().height / 2;
  const elementPosition = element.getBoundingClientRect().top + window.scrollY;

  window.scrollTo({
    top: elementPosition - offset,
    behavior: 'smooth',
  });
};

// Handle form validation
const handleFormSubmit = (event) => {
  event.preventDefault();
  const form = event.target;
  const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
  for (let input of inputs) {
    if (!input.value || input.value === 'choose') {
      input.style.borderColor = 'red';
      scrollToMiddle(input);
      input.focus();
      break;
    } else {
      input.style.borderColor = '';
    }
  }
};

// Handle input changes for year validation
const handleInputChange = (event) => {
  const enteredYear = parseInt(event.target.value, 10);
  if (enteredYear > currentYear || enteredYear < 1000) {
    event.target.style.borderColor = 'red';
  } else {
    event.target.style.borderColor = '';
  }
};

const donorFields = [
  { id: 'name', label: 'Name:', type: 'text', required: true },
  { id: 'phone', label: 'Phone Number:', type: 'tel', required: true },
  { id: 'email', label: 'Email:', type: 'email', required: true },
  { id: 'address', label: 'Address:', type: 'textarea', required: true },
];

const bookFields = [
  { id: 'book-title', label: 'Book Title:', type: 'text', required: true },
  { id: 'author', label: 'Author:', type: 'text', required: true },
  { id: 'publisher', label: 'Publisher:', type: 'text', required: false },
  {
    id: 'year',
    label: 'Year of Publication:',
    type: 'number',
    required: false,
    attributes: { min: 1000, max: currentYear, onChange: handleInputChange },
  },
  {
    id: 'condition',
    label: 'Condition of the Book:',
    type: 'select',
    options: ['Choose Condition', 'New', 'Used (Good)', 'Used (Fair)', 'Damaged'],
    required: true,
  },
];

export default function EResources() {
  useSmoothScroll();

  return (
    <div className="overflow-x-hidden w-full h-full">
      <Helmet>
        <title> | Library | SIESGST</title>
      </Helmet>
      <div className="mx-4 sm:mx-16 lg:mx-40" id="Donate-books">
        <div className="flex items-center justify-center w-full h-auto py-8">
          <div>
            <div className="flex justify-center text-3xl lg:text-4xl font-bold">
              <p>Donate Books</p>
            </div>
            <div className="mx-auto mt-2 mb-6 border-b-4 border-blue-700 w-24 lg:w-44" />
          </div>
        </div>
        <form
          id="donate-books-form"
          className="form-container"
          onSubmit={handleFormSubmit}
          noValidate
        >
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4">Donor Information</h2>
          {donorFields.map(({ id, label, type, required }) => (
            <div key={id} className="mb-4">
              <label htmlFor={id} className="block text-base sm:text-lg font-medium mb-1">
                {label}
              </label>
              {type === 'textarea' ? (
                <textarea
                  id={id}
                  name={id}
                  rows="4"
                  required={required}
                  className="w-full p-3 border rounded-md focus:border-s_blue_400 focus:ring-s_blue_400"
                />
              ) : (
                <input
                  id={id}
                  name={id}
                  type={type}
                  required={required}
                  className="w-full p-3 border rounded-md focus:border-s_blue_400 focus:ring-s_blue_400"
                />
              )}
            </div>
          ))}

          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mt-8 mb-4">Book Details</h2>
          {bookFields.map(({ id, label, type, required, options, attributes }) => (
            <div key={id} className="mb-4">
              <label htmlFor={id} className="block text-base sm:text-lg font-medium mb-1">
                {label}
              </label>
              {type === 'select' ? (
                <select
                  id={id}
                  name={id}
                  required={required}
                  className="w-full p-3 border rounded-md focus:border-s_blue_400 focus:ring-s_blue_400"
                >
                  {options.map((option) => (
                    <option key={option} value={option.toLowerCase().replace(/ /g, '-')}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  id={id}
                  name={id}
                  type={type}
                  required={required}
                  {...attributes}
                  className="w-full p-3 border rounded-md focus:border-s_blue_400 focus:ring-s_blue_400"
                />
              )}
            </div>
          ))}

          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mt-8 mb-4">Agreement</h2>
          <div className="flex items-center mb-6 space-x-4">
            <input
              type="checkbox"
              id="agreement"
              name="agreement"
              required
              className="w-5 h-5"
            />
            <label
              htmlFor="agreement"
              className="text-base sm:text-lg text-gray-700"
            >
              I hereby declare that the information provided is true and accurate, and I agree to
              donate the book(s) as per the rules and guidelines of the library.
            </label>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 text-white bg-s_orange rounded-md shadow-md hover:bg-[#fe8641]"
            >
              Submit Donation
            </button>
          </div>
        </form>
      </div>
      <div className="flex items-center justify-center w-full h-16" />
    </div>
  );
}
