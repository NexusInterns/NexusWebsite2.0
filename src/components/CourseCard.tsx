// 'use client';
interface Props
{
    title: string;
    info: string;
    fee: string;
    duration: number;
}

const CourseCard = ({title, info, fee, duration} : Props) => {
    return (
        <div className="course-card">
            <img className="course-card-image" src={`./src/assets/courses/${title}.webp`} alt={title}/>
            <p className="course-card-information">{info}</p>
            <p className="course-card-price">Course Fee:&nbsp;{fee}</p>
            <p className="course-card-duration">Duration:&nbsp;{duration} Day{duration > 1 && "s"}</p>
            <p className="course-card-read-more">Read More {">>"}</p>
        </div>
    )
}

export default CourseCard