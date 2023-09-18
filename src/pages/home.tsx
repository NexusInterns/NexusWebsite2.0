
import { Course, CourseCard } from '../components/index.tsx';

const Home = () =>
{
  let courses = [
    new Course("Cisco Certified Network Associate CCNA 200-301", "Cisco certification is the edge you need to jump-start your IT career", "FREE for Out-of-School Youth", 5),
    new Course("Windows Server Administration", "You will learn how to automate manual server administration tasks using powershell", "FREE for Out-of-School Youth", 1),
    new Course("Windows Server Administration", "You will learn how to automate manual server administration tasks using powershell", "FREE for Out-of-School Youth", 1),
    new Course("Windows Server Administration", "You will learn how to automate manual server administration tasks using powershell", "FREE for Out-of-School Youth", 1),
    new Course("Windows Server Administration", "You will learn how to automate manual server administration tasks using powershell", "FREE for Out-of-School Youth", 1),
    new Course("Windows Server Administration", "You will learn how to automate manual server administration tasks using powershell", "FREE for Out-of-School Youth", 1),
    new Course("Windows Server Administration", "You will learn how to automate manual server administration tasks using powershell", "FREE for Out-of-School Youth", 1),
    new Course("Windows Server Administration", "You will learn how to automate manual server administration tasks using powershell", "FREE for Out-of-School Youth", 1)
  ];

  return (
    <>
      {courses.map((course) => <CourseCard title={course.title} info={course.info} fee={course.fee} duration={course.duration}/>)}
      
    </>
  );
}

export default Home
