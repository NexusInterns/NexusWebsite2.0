import { CoursePreview } from '../components/index';

const Home = () =>
{
  return (
    <main>
      <h2 className='main-title no-landscape'>Home</h2>
      <div className='main-content'>
        <CoursePreview/>
      </div>
    </main>
  );
}

export default Home