// 'use client';
import { Link } from "react-router-dom";
import "./course-card.css";

interface Props
{
    title0: string;
    title1: string;
    title2: string;
    courseID: string;
    info: string;
    fee: string;
    duration: number;
}

const CourseCard = ({title0, title1, title2, courseID, info, fee, duration} : Props) => {
    return (
        <Link
          key={courseID}
          id={`course-card-${courseID}`}
          className="course-card-container"
          to={`/`}>
            <div className="course-card-title">
                <h2 className="course-card-title-0">{title0}</h2>
                <h2 className="course-card-title-1">{title1}</h2>
                <h2 className="course-card-title-2">{title2}</h2>
            </div>
            <p className="course-card-info">{info}</p>
            <i className="course-card-text">Course Fee</i>
            <p className="course-card-fee">{fee}</p>
            <i className="course-card-text">Course Duration</i>
            <p className="course-card-duration">{duration}</p>
            <div className="course-card-btn">Read More</div>
            <img className="course-card-human" src="./src/assets/icons/course-card-human.svg" alt="" />
        </Link>
    )
}

export default CourseCard