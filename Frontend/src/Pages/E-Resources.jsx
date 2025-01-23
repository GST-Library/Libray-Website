import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useScrollToHash, useSmoothScroll } from '../Navigation.jsx';
import React, { useRef } from 'react';
import useSyllabusStore from '../Store/syllabus.store.js';
import { Helmet } from 'react-helmet';

const exams = [
  {
    title: 'UPSC',
    description: 'UPSC conducts the Civil Services Examination for recruitment to various Indian Administrative Service (IAS) and other top civil services.',
    link: 'https://upsc.gov.in/',
  },
  {
    title: 'GRE',
    description: 'The GRE assesses readiness for graduate programs through verbal, quantitative, and analytical writing tests.',
    link: 'https://www.ets.org/gre.html',
  },
  {
    title: 'GATE',
    description: 'GATE evaluates knowledge in engineering and science subjects for admissions to postgraduate programs and for various public sector job roles in India.',
    link: 'http://gate.iitd.ac.in/',
  },
  {
    title: 'SAT',
    description: 'The SAT is a college admission test that assesses a student\'s readiness for higher education through math, reading, and writing sections.',
    link: 'https://satsuite.collegeboard.org/sat',
  },
  {
    title: 'TOEFL',
    description: 'TOEFL measures English language proficiency for non-native speakers, assessing reading, writing, listening, and speaking skills for academic purposes.',
    link: 'https://www.ets.org/toefl.html',
  },
  {
    title: 'CAT',
    description: 'The Common Admission Test (CAT) is an entrance exam for management programs, testing verbal, logical, and quantitative aptitude.',
    link: 'https://iimcat.ac.in/',
  },
  {
    title: 'IELTS',
    description: 'IELTS assesses English language proficiency for education, work, or migration in English-speaking countries.',
    link: 'https://www.ielts.org/',
  },
  {
    title: 'JEE',
    description: 'JEE is a competitive exam for engineering program admissions, assessing physics, chemistry, and math proficiency.',
    link: 'https://jeemain.nta.nic.in/',
  },
  {
    title: 'NEET',
    description: 'NEET is an entrance exam for medical programs, assessing biology, chemistry, and physics knowledge.',
    link: 'https://neet.nta.nic.in/',
  },
];

const universitySyllabusData = {
  branches: [
    { value: '', label: 'Select Branch' },
    { value: 'Computer Engineering', label: 'Computer Engineering' },
    { value: 'MECHANICAL', label: 'MECHANICAL' },
    { value: 'AIDS', label: 'AIDS' },
    { value: 'AIML', label: 'AIML' },
    { value: 'IT', label: 'IT' },
    { value: 'EXTC', label: 'EXTC' },
    { value: 'Electronics and Computer Science', label: 'Electronics and Computer Science' },
    { value: 'IOT', label: 'IOT' },
  ],
  semesters: [
    { value: '', label: 'Select Semester' },
    { value: 'SEM 1', label: 'SEM 1' },
    { value: 'SEM 2', label: 'SEM 2' },
    { value: 'SEM 3', label: 'SEM 3' },
    { value: 'SEM 4', label: 'SEM 4' },
    { value: 'SEM 5', label: 'SEM 5' },
    { value: 'SEM 6', label: 'SEM 6' },
    { value: 'SEM 7', label: 'SEM 7' },
    { value: 'SEM 8', label: 'SEM 8' },
  ],
};

const examComponent = (exam, index) => {
  return (
    <div key={index} className="relative group">
      <div className="flex justify-between px-10 py-5 my-5 text-2xl duration-700 bg-blue-500 shadow-xl rounded-xl">
        <p className="text-white">{exam.title}</p>
        <FontAwesomeIcon className="text-2xl text-s_orange" icon={faChevronDown} />
      </div>
      <div className="max-h-0 mb-5 overflow-hidden duration-700 shadow-xl group-hover:max-h-[500px] rounded-xl">
        <div className="flex-col content-center mx-10 my-3 text-xl transition-all duration-700 transform opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
          <p className="py-2 text-lg">{exam.description}</p>
          <p className="py-2 text-lg">
            <a href={exam.link} target="_blank" rel="noopener noreferrer" className="text-s_orange underline">
              Click here for more information
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default function EResources() {
  useSmoothScroll();
  const refs = useScrollToHash(['university-syllabus', 'academic-calender', 'competitive-exam']);
  const { branch, semester, setBranch, setSemester, fetchSyllabus, downloadSyllabus, 
    syllabus, loading, error,} = useSyllabusStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetchSyllabus();
  };

  const handleDownload = async () => {
    await downloadSyllabus();
  };

  return (
    <div className="overflow-x-hidden w-full h-full">
      <Helmet>
        <title>E-Resources | Library | SIESGST</title>
      </Helmet>

      {/* E-Resources */}
      <div className="bg-gray-100 flex items-center justify-center py-8 sm:py-12 md:py-16">
        <div>
          <div className="flex justify-center text-3xl sm:text-4xl md:text-5xl font-bold text-s_blue">
            <p>E-Resources</p>
          </div>
          <div className="border-b-4 mx-auto w-20 sm:w-32 mt-2 border-s_orange" />
        </div>
      </div>

      {/* University Syllabus */}
      <div className="mx-4 sm:mx-16 md:mx-40 py-10">
        <div className="flex items-center justify-center w-full py-6">
          <div>
            <div className="flex justify-center text-2xl sm:text-3xl font-bold">
              <p>University Syllabus</p>
            </div>
            <div className="mx-auto mt-2 mb-6 border-b-4 border-blue-700 w-24 sm:w-32" />
          </div>
        </div>
        <form
          id="question-paper-form"
          className="p-4 border bg-[#f3f2ed] rounded-2xl shadow-2xl w-full max-w-2xl mx-auto"
          onSubmit={handleSubmit}
        >
          <div className="px-4 mb-4">
            <label htmlFor="branch" className="block mb-2 text-base sm:text-lg font-bold text-gray-700">
              Select Branch:
            </label>
            <select
              id="branch"
              name="branch"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              className="w-full p-3 border border-gray-400 rounded-md focus:border-blue-600 focus:ring-blue-600"
            >
              {universitySyllabusData.branches.map((branch) => (
                <option key={branch.value} value={branch.value}>
                  {branch.label}
                </option>
              ))}
            </select>
          </div>
          <div className="px-4 mb-4">
            <label htmlFor="semester" className="block mb-2 text-base sm:text-lg font-bold text-gray-700">
              Select Semester:
            </label>
            <select
              id="semester"
              name="semester"
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
              className="w-full p-3 border border-gray-400 rounded-md focus:border-s_otext-s_orange focus:ring-s_otext-s_orange"
            >
              {universitySyllabusData.semesters.map((semester) => (
                <option key={semester.value} value={semester.value}>
                  {semester.label}
                </option>
              ))}
            </select>
          </div>
          {error && <div className="px-4 mb-4 text-red-500">{error}</div>}
          <div className="flex justify-center">
            <button
              type="submit"
              id="download-btn"
              className="px-4 py-2 mt-2 text-white rounded-md bg-s_orange w-36 sm:w-40 active:bg-[#fe8641]"
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Get Syllabus'}
            </button>
          </div>
          {syllabus && (
            <div className="px-4 mt-4 flex justify-center">
              <button
                type="button"
                onClick={handleDownload}
                className="px-4 py-2 text-white rounded-md bg-blue-500 active:bg-blue-700"
              >
                Click to Download
              </button>
            </div>
          )}
        </form>
      </div>

      {/* Competitive Exams */}
      <div ref={refs['competitive-exams']} id="competitive-exams" className="mx-4 sm:mx-16 md:mx-40 py-10">
        <div className="flex items-center justify-center w-full py-6">
          <div>
            <div className="flex justify-center text-2xl sm:text-3xl font-bold">
              <p>Competitive Exams</p>
            </div>
          </div>
        </div>
        <div>
          {exams.map((exam, index) => examComponent(exam, index))}
        </div>
      </div>
    </div>
  );
}
