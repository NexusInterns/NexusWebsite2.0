import Home from "./Home";
import Courses from "./Courses";
import About from "./About";
import FAQS from "./FAQS";
import Terms from "./Terms";
import Policy from "./Policy";

let pages = [Home, Courses, About, FAQS, Terms, Policy];

const PortraitSettings = {
    navPages: pages.slice(0,5),
    footerPages: pages.slice(5),
};

const LandscapeSettings = {
    navPages: pages.slice(0,4),
    footerPages: pages.slice(4),
};

const orientationSettings = window.innerHeight > window.innerWidth ? PortraitSettings : LandscapeSettings; 

export {
    Home,
    Courses,
    About,
    FAQS,
    Terms, 
    Policy,

    pages,
    
    
    PortraitSettings,
    LandscapeSettings,
    orientationSettings,
}