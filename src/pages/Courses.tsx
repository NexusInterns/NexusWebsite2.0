
import { CourseCard } from '../components/index.tsx';
import {coursesList} from '../assets/index.ts';

const Courses = () =>
{
  return (
    <section className="courses-container">
      {coursesList.map((course) => <CourseCard key={course.courseID} title={course.title} courseID={course.courseID} info={course.info} fee={course.fee} duration={course.duration}/>)}
    </section>
  );
}

export default Courses
