import { useSmoothScroll } from '../Navigation';
import '../css/form.css';
import { Helmet } from 'react-helmet';

const currentYear = new Date().getFullYear();

// Handle input changes for year validation
const handleInputChange = (event) => {
  const enteredYear = parseInt(event.target.value);
  if (enteredYear > currentYear || enteredYear < 1000) {
    event.target.style.borderColor = 'red';
  } else {
    event.target.style.borderColor = '';
  }
};

export default function EResources() {
  useSmoothScroll();

  return (
    <div className="overflow-x-hidden w-full h-full">
      <Helmet>
        <title> | Library | SIESGST</title>
      </Helmet>

      {/* Suggest Books */}
      <div className="mx-4 sm:mx-16 lg:mx-40" id="Suggest-books">
        <div className="flex items-center justify-center w-full h-auto py-8">
          <div>
            <div className="flex justify-center text-3xl lg:text-4xl font-bold">
              <p>Suggest Books</p>
            </div>
            <div className="mx-auto mt-2 mb-6 border-b-4 border-blue-700 w-24 lg:w-44" />
          </div>
        </div>

        <form
          id="suggest-books-form"
          className="form-container"
        >
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4">Book Details</h2>
          
          <div className="mb-4">
            <label htmlFor="book-title" className="block text-base sm:text-lg font-medium mb-1">
              Book Title:
            </label>
            <input
              type="text"
              id="book-title"
              name="book_title"
              required
              className="w-full p-3 border rounded-md focus:border-s_blue_400 focus:ring-s_blue_400"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="author" className="block text-base sm:text-lg font-medium mb-1">
              Author:
            </label>
            <input
              type="text"
              id="author"
              name="author"
              required
              className="w-full p-3 border rounded-md focus:border-s_blue_400 focus:ring-s_blue_400"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="publisher" className="block text-base sm:text-lg font-medium mb-1">
              Publisher:
            </label>
            <input
              type="text"
              id="publisher"
              name="publisher"
              className="w-full p-3 border rounded-md focus:border-s_blue_400 focus:ring-s_blue_400"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="year" className="block text-base sm:text-lg font-medium mb-1">
              Year of Publication:
            </label>
            <input
              type="number"
              id="year"
              name="year"
              min="1000"
              max={currentYear}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-md focus:border-s_blue_400 focus:ring-s_blue_400"
            />
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="px-6 py-2 text-white bg-s_orange rounded-md shadow-md hover:bg-[#fe8641]"
            >
              Suggest Book
            </button>
          </div>
        </form>
      </div>

      <div className="flex items-center justify-center w-full h-16" />
    </div>
  );
}
