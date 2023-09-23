// 'use client';
import { Link } from "react-router-dom";
import "./course-preview.css";

interface Props {
    title: string;
    courseID: string;
}

const CoursePreview = ({title, courseID} : Props) => {
    return (
        <Link
          key={courseID}
          id={`course-preview-${courseID}`}
          className="course-preview-container"
          to={`/`}>
            <h3 className="course-preview-title">{title}</h3>
            <div className="course-preview-btn">Enroll Now</div>
            <img className="course-preview-human" src="./src/assets/icons/course-preview-human.svg" alt="" />
        </Link>
    )
}

export default CoursePreview