import Home from "./Home";
import Bootcamps from "./Bootcamps";
import Courses from "./Courses";
import About from "./About";
import FAQS from "./FAQS";
import Terms from "./Terms";
import Policy from "./Policy";

let pages = [Home, Bootcamps, Courses, About, FAQS, Terms, Policy];
let navPages = pages.slice(0,3);
let footerPages = pages.slice(4);

export {
    Home,
    Bootcamps,
    Courses,
    About,
    FAQS,
    Terms, 
    Policy,

    pages, navPages, footerPages
}