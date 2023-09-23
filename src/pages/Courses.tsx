
import { CourseCard } from '../components/index.tsx';
import {coursesList} from '../assets/index.ts';

const Courses = () =>
{
  return (
    <main>
      <h2 className='main-title'>Courses</h2>
      {coursesList.map((course) => <CourseCard key={course.courseID} title0={course.title0} title1={course.title1} title2={course.title2} courseID={course.courseID} info={course.info} fee={course.fee} duration={course.duration}/>)}
    </main>
  );
}

export default Courses
