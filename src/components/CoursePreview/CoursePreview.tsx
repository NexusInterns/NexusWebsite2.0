// 'use client';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { coursesList } from '../../assets/index.ts';
import "./course-preview.css";

const timeToChange = 40;
var timePercent: number = 0;

const CoursePreview = () => {
    const SetTimeBar = () => {
        timePercent =((timeToChange - timeLeft) / timeToChange) * 0.4;
      const line_opacity = `calc(0.6 + ${timePercent})`;
      document.getElementById(`course-preview-button-${shownCourse}`).style.opacity = line_opacity;
    }
  
    const [shownCourse, setShownCourse] = useState(0);
    const [timeLeft, setTimeLeft] = useState(timeToChange);
    var course = coursesList[shownCourse];

    const changeCourse = (num: number) => {
        document.getElementById(`course-preview-button-${shownCourse}`).style.opacity = "0.4";
         setTimeLeft(timeToChange);
         setShownCourse(num);
    };

    useEffect(() => {
      SetTimeBar();
      if(timeLeft===-1)
      {
        changeCourse((shownCourse + 1) % (coursesList.length));
         return;
      }
  
      const intervalId = setInterval(() => setTimeLeft(timeLeft - 1), 100);
  
      return () => clearInterval(intervalId);
    }, [timeLeft]);
  
    return (
        <section className="course-preview">
            <Link
            key={course.courseID}
            id={`course-preview-${course.courseID}`}
            className="course-preview-container"
            to={`/`}>
                <h3 className="course-preview-title">{course.title}</h3>
                <div className="course-preview-enroll">Enroll Now</div>
                <img className="course-preview-human" src="./src/assets/icons/course-preview-human.svg" alt="" />
            </Link>
            <div className="course-preview-button-container">
                {coursesList.map((course, id) => <div key={id} id={`course-preview-button-${id}`} className="course-preview-button" onClick={() => changeCourse(id)}></div>
                )}
            </div>
        </section>
    )
}

export default CoursePreview