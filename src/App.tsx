import * as Components from './index.tsx';
// import axios from 'axios';
// import { useEffect, useState } from "react";

function App()
{
  let courses = [
    new Components.Course("Cisco Certified Network Associate CCNA 200-301", "Cisco certification is the edge you need to jump-start your IT career", "FREE for Out-of-School Youth", 5),
    new Components.Course("Windows Server Administration", "You will learn how to automate manual server administration tasks using powershell", "FREE for Out-of-School Youth", 1),
    new Components.Course("Windows Server Administration", "You will learn how to automate manual server administration tasks using powershell", "FREE for Out-of-School Youth", 1),
    new Components.Course("Windows Server Administration", "You will learn how to automate manual server administration tasks using powershell", "FREE for Out-of-School Youth", 1),
    new Components.Course("Windows Server Administration", "You will learn how to automate manual server administration tasks using powershell", "FREE for Out-of-School Youth", 1),
    new Components.Course("Windows Server Administration", "You will learn how to automate manual server administration tasks using powershell", "FREE for Out-of-School Youth", 1),
    new Components.Course("Windows Server Administration", "You will learn how to automate manual server administration tasks using powershell", "FREE for Out-of-School Youth", 1),
    new Components.Course("Windows Server Administration", "You will learn how to automate manual server administration tasks using powershell", "FREE for Out-of-School Youth", 1)
  ];

  return (
    <>
      {courses.map((course) => <Components.CourseCard title={course.title} info={course.info} fee={course.fee} duration={course.duration}/>)}
      
    </>
  );
}

export default App
