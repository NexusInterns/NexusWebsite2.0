import Home from "./Home";
import Courses from "./Courses/Courses";
import About from "./About/About";
import FAQS from "./FAQS/FAQS";
import Terms from "./Terms/Terms";
import Policy from "./Policy";

import CoursePage from "./Courses/CoursePage";
import { CoursesData } from "../server/data";

const PageInfo = (name: string, component: () => JSX.Element, paths: string[]) => {
    return {
        name: name,
        component: component,
        paths: paths
    }
};

const GetPageInfo = (page : () => JSX.Element, paths: string[] = []) => {
    paths.push(`/${page.name}`);
    if (page.name === "Home") paths.push("/");
    return PageInfo(page.name, page, paths);
};

const navPages = [Home, Courses, About, FAQS].map(page => GetPageInfo(page));
const footerPages = [Terms, Policy].map(page => GetPageInfo(page));
const coursePages = CoursesData.map(course => {
    const title = `${course.title.join(" ").replaceAll(" ", "_")}`;
    return PageInfo(`${title}`, () => <CoursePage content={course}/>, [`/Courses/${title}`]);
});

const pages = navPages.concat(footerPages,coursePages);


export {
    Home,
    Courses,
    About,
    FAQS,
    Terms, 
    Policy,

    navPages,
    footerPages,
    coursePages,
    pages,
}

export default pages;