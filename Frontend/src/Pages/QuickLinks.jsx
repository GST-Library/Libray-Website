import { useState } from 'react'
import '../css/QuickLinks.css'
import {useScrollToHash, useSmoothScroll} from '../Navigation'
import usePyqsStore from '../Store/pyqs.store';
import axios from 'axios';

const branchOptions = [
    { value: "choose", text: "Choose Branch" },
    { value: "Computer Engineering"  , text: "Computer Engineering"   },
    { value: "Electronics and Telecommunication", text: "Electronics and Telecommunication" },
    { value: "Electronics and Computer Science"  , text: "Electronics and Computer Science"   },
    { value: "Information Technology", text: "Information Technology" },
    { value: "CS IOT" , text: "CS IOT"  },
    { value: "First Year Engineering" , text: "First Year Engineering"  },
    { value: "AIML", text: "AIML" },
    { value: "AIDS", text: "AIDS" },
];

const semesterOptions = [
    { value: "choose", text: "Choose Semester" },
    { value: "SEM 1", text: "SEM 1" },
    { value: "SEM 2", text: "SEM 2" },
    { value: "SEM 3", text: "SEM 3" },
    { value: "SEM 4", text: "SEM 4" },
    { value: "SEM 5", text: "SEM 5" },
    { value: "SEM 6", text: "SEM 6" },
    { value: "SEM 7", text: "SEM 7" },
    { value: "SEM 8", text: "SEM 8" },
];

const subjectOptions = {
    "AIDS": {
        "SEM 1": ["Engineering Mathematics-1", "Engineering Physics-1", "Engineering Chemistry-1", "Engineering Mechanics", "Basic Electrical and Electronics Engineering"],
        "SEM 2": ["Engineering Mathematics-2", "Engineering Physics-2", "Engineering Chemistry-2", "Engineering Graphics", "C Programming","PCE-1"],
        "SEM 3": ["Engineering Mathematics-3", "DSGT", "Data Structure", "DLCOA", "Computer Graphics"],
        "SEM 4": ["Engineering Mathematics-4", "AOA", "DBMS", "Operating System", "Microprocessor"],
        "SEM 5": ["Computer Network", "Web Computing", "Artificial Intelligence", "DWM", "DLO-1"],
        "SEM 6": ["Data Analytics and Visualization", "Cryptography and System Security", "Software Engineering and Project Management", "Machine Learning", "DLO-2"],
        "SEM 7": ["Deep Learning", "Big Data Analytics", "DLO-3", "DLo-4", "ILO-1"],
        "SEM 8": ["Advanced Artificial Intelligence", "DLO-5", "DLO-6", "ILO-2"],
        
    },
    "Computer Engineering": {
        "SEM 1": ["Engineering Mathematics-1", "Engineering Physics-1", "Engineering Chemistry-1", "Engineering Mechanics", "Basic Electrical and Electronics Engineering"],
        "SEM 2": ["Engineering Mathematics-2", "Engineering Physics-2", "Engineering Chemistry-2", "Engineering Graphics", "C Programming","PCE-1"],
        "SEM 3": ["Engineering Mathematics-3", "DSGT", "Data Structure", "DLCOA", "Computer Graphics"],
        "SEM 4": ["Engineering Mathematics-4", "AOA", "DBMS", "Operating System", "Microprocessor"],
        "SEM 5": ["TCS", "Software Engineering", "Computer Network", "DWM", "DLO-1"],
        "SEM 6": ["System Programming & Compiler Construction", "Cryptography and System Security", "Mobile Computing", "Artificial Intelligence", "DLO-2"],
        "SEM 7": ["Machine Learning", "Big Data Analytics", "DLO-3", "DLO-4", "ILO-1"],
        "SEM 8": ["Distributed Computing", "DLO-5", "DLO-6", "ILO-1",],
    
    },
    "Electronics and Telecommunication": {
        "SEM 1": ["Engineering Mathematics-1", "Engineering Physics-1", "Engineering Chemistry-1", "Engineering Mechanics", "Basic Electrical and Electronics Engineering"],
        "SEM 2": ["Engineering Mathematics-2", "Engineering Physics-2", "Engineering Chemistry-2", "Engineering Graphics", "C Programming","PCE-1"],
        "SEM 3": ["EXTC Sem3 Sub1", "EXTC Sem3 Sub2", "EXTC Sem3 Sub3", "EXTC Sem3 Sub4", "EXTC Sem3 Sub5"],
        "SEM 4": ["Engineering Mathematics-4", "Microcontrollers", "Linear Integrated Circuits", "Signals & Systems", "PCE"],
        "SEM 5": ["Digital Communication", "DTSP", "Digital VLSI", "Random Signal Analysis", "DLO-1"],
        "SEM 6": ["Electromagnetics and Antenna", "Computer Communication Networks", "Image Processing And Machine vision", "Artificial Neural Network And Fuzzy Logic", "DLO-2"],
        "SEM 7": ["Microwave Engineering", "Mobile Communication System", "DLO-3", "DLO-4", "ILO-1"],
        "SEM 8": ["Optical Communication And Networks", "DLO-5", "DLO-6", "ILO-2"],
    
    },
    "Electronics and Computer Science": {
        "SEM 1": ["Engineering Mathematics-1", "Engineering Physics-1", "Engineering Chemistry-1", "Engineering Mechanics", "Basic Electrical and Electronics Engineering"],
        "SEM 2": ["Engineering Mathematics-2", "Engineering Physics-2", "Engineering Chemistry-2", "Engineering Graphics", "C Programming","PCE-1"],
        "SEM 3": ["Engineering Mathematics-3", "Electronics Devices", "Digital Electronics", "Data Structures and Algorithms", "DBMS"],
        "SEM 4": ["Engineering Mathematics-4", "Electronic Circuits", "Controls and Instrumentation", "Microprocessors and Microcontrollers", "Discrete Structures and Automata Theory"],
        "SEM 5": ["Communication Engineering", "Computer Organization and Architecture", "Software Engineering", "Web Technologies", "DLO-2"],
        "SEM 6": ["Embedded Systems and TROS ", "Artificial Intelligence", "Computer Networks", "DWM", "DLO-2"],
        "SEM 7": ["VLSI", "IOT", "DLO-3", "DLO-4", "ILO-1"],
        "SEM 8": ["Robotics", "DLO-5", "DLO-6", "ILO-2"],
    
    },
    "Information Technology": {
        "SEM 1": ["Engineering Mathematics-1", "Applied Physics-1", "Engineering Chemistry-1", "Engineering Mechanics", "Basic Electrical and Electronics Engineering"],
        "SEM 2": ["Engineering Mathematics-2", "Engineering Physics-2", "Engineering Chemistry-2", "Engineering Graphics", "C Programming","PCE-1"],
        "SEM 3": ["Engineering Mathematics-3", "Data Structure and Analysis", "DBMS", "Principles of Communication", "Paradigms and computer Programming Fundamentals"],
        "SEM 4": ["Engineering Mathematics-4", "Computer Network and Network Design", "Operating System", "Automata theory", "Computer Organization and Architecture"],
        "SEM 5": ["Internet Programming", "Computer Network Security", "Entrepreneurship and E-business", "Software engineering", "DLO-1"],
        "SEM 6": ["Data Mining & Business Intelligence", "Web X.0", "Wireless Technology", "AI and DS-1", "DLO-2"],
        "SEM 7": ["AI and DS-2", "Internet of Everything", "DLO-3", "DLO-4", "ILO-1"],
        "SEM 8": ["Blockchain and DLT", "DLO-5", "DLO-6", "ILO-2", ],
    
    },
    "AIML": {
        "SEM 1": ["Engineering Mathematics-1", "Applied Physics-1", "Engineering Chemistry-1", "Engineering Mechanics", "Basic Electrical and Electronics Engineering"],
        "SEM 2": ["Engineering Mathematics-2", "Engineering Physics-2", "Engineering Chemistry-2", "Engineering Graphics", "C Programming","PCE-1"],
        "SEM 3": ["Engineering Mathematics-3", "DSGT", "Data Structure", "DLCOA", "Computer Graphics"],
        "SEM 4": ["Engineering Mathematics-4", "AOA", "DBMS", "Operating System", "Microprocessor"],
        "SEM 5": ["Computer Network", "Web Computing", "Artificial Intelligence", "DWM", "DLO-1"],
        "SEM 6": ["Data Analytics and Visualization", "Cryptography and System Security", "Software Engineering and Project Management", "Machine Learning", "DLO-2"],
        "SEM 7": ["Deep Learning", "Big Data Analytics", "DLO-3", "DLo-4", "ILO-4"],
        "SEM 8": ["Advanced Artificial Intelligence", "DLO-5", "DLO-6", "ILO-2"],
    
    },
    "CS IOT": {
        "SEM 1": ["Engineering Mathematics-1", "Applied Physics-1", "Engineering Chemistry-1", "Engineering Mechanics", "Basic Electrical and Electronics Engineering"],
        "SEM 2": ["Engineering Mathematics-2", "Engineering Physics-2", "Engineering Chemistry-2", "Engineering Graphics", "C Programming","PCE-1"],
        "SEM 3": ["IOT Sem3 Sub1", "IOT Sem3 Sub2", "IOT Sem3 Sub3", "IOT Sem3 Sub4", "IOT Sem3 Sub5"],
        "SEM 4": ["IOT Sem4 Sub1", "IOT Sem4 Sub2", "IOT Sem4 Sub3", "IOT Sem4 Sub4", "IOT Sem4 Sub5"],
        "SEM 5": ["TCS", "Software Engineering", "Computer Network", "DWM", "DLO-1"],
        "SEM 6": ["Cryptography and System Security", "IOT Architecture and Protocols", "Blockchain Technology", "Web X.0", "DLO-2"],
        "SEM 7": ["IOT Sem7 Sub1", "IOT Sem7 Sub2", "IOT Sem7 Sub3", "IOT Sem7 Sub4", "IOT Sem7 Sub5"],
        "SEM 8": ["IOT Sem8 Sub1", "IOT Sem8 Sub2", "IOT Sem8 Sub3", "IOT Sem8 Sub4", "IOT Sem8 Sub5"],
    
    },
    "First Year Engineering":{
        "SEM 1": ["Engineering Mathematics-1", "Engineering Physics-1", "Engineering Chemistry-1", "Engineering Mechanics", "Basic Electrical and Electronics Engineering"],
        "SEM 2": ["Engineering Mathematics-2", "Engineering Physics-2", "Engineering Chemistry-2", "Engineering Graphics", "C Programming","PCE-1"], 
    }
    
};

// const yearOptions = [
//     "2019 May", "2019 November", "2020 May", "2020 November",
//     "2021 May", "2021 November", "2022 May", "2022 November",
//     "2023 May", "2023 November", "2024 May", "2024 November"
// ];

const yearOptions = [
    { value: "2019", text: "2019" },
    { value: "2020", text: "2020" },
    { value: "2021", text: "2021" },
    { value: "2022", text: "2022" },
    { value: "2023", text: "2023" },
    { value: "2024", text: "2024" },
];

const monthOptions = [
    { value: "May", text: "May" },
    { value: "November", text: "November" },
];
// const Scholarship = "https://scholarships.gov.in/"
// const Research_fund = "https://www.aicte-india.org/opportunities/students/research-funds"

function Quicklinks() {
    useSmoothScroll();
    useScrollToHash(['pyq', 'lib-brochure', "more"]);

// Extract state and actions from the store
const {
    branch,
    semester,
    subject,
    year,
    month,
    loading,
    error,
    setBranch,
    setSemester,
    setSubject,
    setYear,
    setMonth,
    fetchPYQ,
    downloadPYQ,
} = usePyqsStore();

const handleBranchChange = (e) => {
    const selectedBranch = e.target.value;
    console.log("Branch changed to:", selectedBranch); // Debug
    setBranch(e.target.value);
    setSemester("choose");
    setSubject("choose");
};

const handleSemesterChange = (e) => {
    const selectedSemester = e.target.value;
    console.log("Semester changed to:", selectedSemester); // Debug
    setSemester(e.target.value);
    setSubject("choose");
};

const handleSubjectChange = (e) => {
    const selectedSubject = e.target.value;
    console.log("Subject changed to:", selectedSubject); // Debug
    setSubject(e.target.value);
};

const handleYearChange = (e) => {
    const selectedYear = e.target.value;
    console.log("Year changed to:", selectedYear); // Debug
    setYear(e.target.value);
};

const handleMonthChange = (e) => {
    const selectedMonth = e.target.value;
    console.log("Month changed to:", selectedMonth); // Debug
    setMonth(e.target.value);
};

const availableSubjects = subjectOptions[branch]?.[semester] || [];

const isSubmitDisabled =
    branch === "choose" ||
    semester === "choose" ||
    subject === "choose" ||
    year === "choose" ||
    month === "choose" ||
    loading;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const pyqData = await fetchPYQ();
            if (pyqData && pyqData._id) { // Assuming the PYQ data contains an 'id' field
    
                const response = await downloadPYQ(pyqData._id);
    
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
    
                const contentDisposition = response.headers['content-disposition'];
                let fileName = 'pyq.pdf';
                if (contentDisposition) {
                    const fileNameMatch = contentDisposition.match(/filename="?([^"]+)"?/);
                    if (fileNameMatch && fileNameMatch.length === 2) {
                        fileName = fileNameMatch[1];
                    }
                }
    
                link.setAttribute('download', fileName);
                document.body.appendChild(link);
                link.click();
                link.parentNode.removeChild(link);
                window.URL.revokeObjectURL(url);
                console.log("Download initiated");
            } else {
                console.log("PYQ Data is undefined or missing 'id'");
            }
        } catch (err) {
            console.error("Error fetching or downloading PYQ:", err);
        }
    };
    

return (
    <div className='font-serif mt-28'>
      <div className='mx-40' id='Donate-books'>
        <div className='flex items-center justify-center w-full h-40'>
          <div>
            <div className='flex justify-center text-4xl font-bold'>
              <p>Question Papers</p>
            </div>
            <div className="mx-auto mt-2 mb-10 border-b-4 border-blue-700 w-44"></div>
          </div>
        </div>
    <form 
    id="question-paper" 
    className="form-container" 
    onSubmit={handleSubmit}>
        <label htmlFor="branch">Branch:</label>
        <select id="branch" value={branch} onChange={handleBranchChange}>
        {branchOptions.map(option => (
            <option key={option.value} value={option.value}>
            {option.text}
            </option>
        ))}
        </select>

        <label htmlFor="semester">Semester:</label>
        <select
        id="semester"
        value={semester}
        onChange={handleSemesterChange}
        disabled={branch === "choose"}
        >
        {semesterOptions.map(option => (
            <option key={option.value} value={option.value}>
            {option.text}
            </option>
        ))}
        </select>

        <label htmlFor="subject">Subject:</label>
        <select
        id="subject"
        value={subject}
        onChange={handleSubjectChange}
        disabled={semester === "choose"}
        >
        {availableSubjects.length > 0 ? (
            availableSubjects.map((subj, index) => (
            <option key={index} value={subj}>
                {subj}
            </option>
            ))
        ) : (
            <option value="">No subjects available</option>
        )}
        </select>

        <label htmlFor="year">Year:</label>
        <select id="year" value={year} onChange={handleYearChange}>
        <option value="choose">Choose Year</option>
        {yearOptions.map(option => (
            <option key={option.value} value={option.value}>
            {option.text}
            </option>
        ))}
        </select>

        <label htmlFor="month">Month:</label>
        <select id="month" value={month} onChange={handleMonthChange}>
        <option value="choose">Choose Month</option>
        {monthOptions.map(option => (
            <option key={option.value} value={option.value}>
            {option.text}
            </option>
        ))}
        </select>

        {error && <p className="error-message">{error}</p>}

        <button type="submit" disabled={isSubmitDisabled}>
        {loading ? 'Submitting...' : 'Submit'}
        </button>
    </form>
    </div>

        <div className='flex items-center justify-center w-full h-32'/>
    </div>
);
}

export default Quicklinks;