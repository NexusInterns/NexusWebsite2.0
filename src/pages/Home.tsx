import { EffectsContainer, CoursePreview } from '../components/index';
import { coursesList } from '../assets/index.ts';

const Home = () =>
{
  return (
    <main>
      <h2 className='main-title'>Home</h2>
      {coursesList.map((course) => 
      <EffectsContainer effects='fromLeft'>
        <CoursePreview title={course.title} courseID={course.courseID}></CoursePreview>
      </EffectsContainer>)}
    </main>
  );
}

export default Home