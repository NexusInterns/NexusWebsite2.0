import homeIcon from './icons/home.svg';
import coursesIcon from './icons/courses.svg';
import aboutIcon from './icons/about.svg';
import faqsIcon from './icons/faqs.svg';
import termsIcon from './icons/terms.svg';
import logoIcon from './icons/terms.svg';


const icons = [ homeIcon, coursesIcon, aboutIcon, faqsIcon, termsIcon, logoIcon];


export default {
    icons,

    homeIcon,
    coursesIcon,
    aboutIcon,
    faqsIcon,
    termsIcon,
    logoIcon,
}



import { Course } from '../components/index.tsx';
const coursesList = [
    new Course("Cisco Certified:", "Certified Cisco Associate", "CCNA200-301", "CCNA200-301", "Cisco certification is the edge you need to jump-start your IT career", "FREE for Out-of-School Youth", 5),
    new Course("Windows Server 2019:", "Administration Automation", "using Powershell", "WS2019", "Cisco certification is the edge you need to jump-start your IT career", "FREE for Out-of-School Youth", 5),
];

export {coursesList}