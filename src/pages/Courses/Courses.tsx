
import { CourseCard } from '../../components/index.tsx';
import { CoursesData } from "../../server/data";
import './course.css';

const Courses = () =>
{
  return (
    <main>
      <h2 className='main-title'>Courses</h2>
      <div className='main-content'>
        {CoursesData.map((course, id) => <CourseCard key={course.key} content={course} id={id}/>)}
      </div>
    </main>
  );
}

export default Courses
