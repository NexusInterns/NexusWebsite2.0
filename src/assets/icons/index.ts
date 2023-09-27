import home from './home.svg';
import courses from './courses.svg';
import about from './about.svg';
import faqs from './faqs.svg';
import terms from './terms.svg';
import logo from './logo.svg';

const icons = [ home, courses, about, faqs, terms, logo];

const GetIcon = (name: string) => eval(name.toLowerCase());

export {
    home,
    courses,
    about,
    faqs,
    terms,
    logo,

    GetIcon
}

export default icons;
