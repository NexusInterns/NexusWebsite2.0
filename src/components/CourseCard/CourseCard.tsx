// 'use client';
import "./course-card.css";

interface Props
{
    title: string;
    courseID: string;
    info: string;
    fee: string;
    duration: number;
}

const CourseCard = ({title, courseID, info, fee, duration} : Props) => {
    return (
        <div className="course-card" id={courseID}>
            <img className="course-card-image" src={`./src/assets/courses/${courseID}.webp`} alt={title}/>
            <p className="course-card-information">{info}</p>
            <p className="course-card-price">Course Fee:&nbsp;{fee}</p>
            <p className="course-card-duration">Duration:&nbsp;{duration} Day{duration > 1 && "s"}</p>
            <div className="course-card-read-more">Read More {">>"}</div>
        </div>
    )
}

export default CourseCard