// 'use client';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { CoursesData } from "../../server/data";
import { useSwipeable } from "react-swipeable";
import "./course-preview.css";
import { coursePages } from "../../pages";

const CoursePreview = () => {
  const timeToChange = 40;
  const defaultOpacity = 0.4;
  const opacityAdd = 1 - defaultOpacity;

  const [timeLeft, setTimeLeft] = useState(timeToChange);
  const [shownCourse, setShownCourse] = useState(0);
  var course = CoursesData[shownCourse];

  const ChangeCourse = (num: number) => {
    num = (num % CoursesData.length) + (num < 0 ? CoursesData.length : 0);
    setShownCourse(num);
    setTimeLeft(timeToChange);
  };

  const OpacityUpdate = () =>
    `${
      opacityAdd + ((timeToChange - timeLeft) / timeToChange) * defaultOpacity
    }`;

  const handlers = useSwipeable({
    onSwipedLeft: () => ChangeCourse(shownCourse + 1),
    onSwipedRight: () => ChangeCourse(shownCourse - 1),
  });

  useEffect(() => {
    if (timeLeft === -1) {
      ChangeCourse(shownCourse + 1);
      return;
    }

    const intervalId = setInterval(() => setTimeLeft(timeLeft - 1), 100);
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  return (
    <section className="course-preview"  {...handlers} >
      <Link className="course-preview-container" to={`${coursePages[shownCourse].paths[0]}}`}>
        <h3 className="course-preview-title">{course.title.join(" ")}</h3>
        <div className="course-preview-enroll">Enroll Now</div>
      </Link>
      <div className="course-preview-buttons">
        {CoursesData.map((x, id) => {
          return (
            <div
              key={id}
              id={`course-preview-button-${id}`}
              className="course-preview-button"
              onClick={() => ChangeCourse(id)}
              style={
                x === course
                  ? { opacity: OpacityUpdate(), width: "20px", height: "20px" }
                  : { opacity: defaultOpacity }
              }
            ></div>
          );
        })}
      </div>
      <img
        className="course-preview-human"
        src="./src/assets/icons/course-preview-human.svg"
        alt=""
      />
    </section>
  );
};

export default CoursePreview;
