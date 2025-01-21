import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';


const useScrollToHash = (sections) => {
const refs = sections.reduce((acc, section) => {
    acc[section] = useRef(null);
    return acc;
}, {});

const location = useLocation();

useEffect(() => {
    const hash = location.hash;
    if (hash && refs[hash.replace('#', '')]?.current) {
    refs[hash.replace('#', '')].current.scrollIntoView({ behavior: 'smooth' });
    }
}, [location, refs]);
return refs;
};

//modifying default navigation
const useSmoothScroll = (offset = 100) => {
    const location = useLocation();
    
    useEffect(() => {
    if (location.hash) {
        const element = document.getElementById(location.hash.replace('#', ''));
        if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: elementPosition - offset,
            behavior: 'smooth',
            });
        }
        }
    }, [location, offset]);
};
export {useScrollToHash, useSmoothScroll };