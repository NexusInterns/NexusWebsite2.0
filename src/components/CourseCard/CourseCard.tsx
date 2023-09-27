// 'use client';
import { Link } from "react-router-dom";
import "./course-card.css";
import { coursePages } from "../../pages";

interface Props
{
    id: number;
    content: {
        title: string[];
        key: string;
        info: string;
        fee: string;
        duration: string;
    }
}

const CourseCard = ({content, id} : Props) => {
    return (
        <Link
          id={`course-card-${content.key}`}
          className="course-card-container"
          to={`${coursePages[id].paths[0]}`}>
            <div className="course-card-title">
                <h2 className="course-card-title-0">{content.title[0]}</h2>
                <h2 className="course-card-title-1">{content.title[1]}</h2>
                <h2 className="course-card-title-2">{content.title[2] ? content.title[2] : content.key}</h2>
            </div>
            <p className="course-card-info">{content.info}</p>
            <i className="course-card-text">Course Fee</i>
            <p className="course-card-fee">{content.fee}</p>
            <i className="course-card-text">Course Duration</i>
            <p className="course-card-duration">{content.duration}</p>
            <div className="course-card-btn">Read More</div>
            <img className="course-card-human" src="./src/assets/icons/course-card-human.svg" alt="" />
        </Link>
    )
}

export default CourseCard