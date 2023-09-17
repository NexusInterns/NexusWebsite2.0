import * as Components from './index.tsx';
// import axios from 'axios';
// import { useEffect, useState } from "react";

function App()
{
  let options = [
    new Components.Option("Cisco Certified Network Associate CCNA 200-301", "Cisco certification is the edge you need to jump-start your IT career", "FREE for Out-of-School Youth", 5),
    new Components.Option("Windows Server Administration", "You will learn how to automate manual server administration tasks using powershell", "FREE for Out-of-School Youth", 1),
    new Components.Option("Windows Server Administration", "You will learn how to automate manual server administration tasks using powershell", "FREE for Out-of-School Youth", 1),
    new Components.Option("Windows Server Administration", "You will learn how to automate manual server administration tasks using powershell", "FREE for Out-of-School Youth", 1),
    new Components.Option("Windows Server Administration", "You will learn how to automate manual server administration tasks using powershell", "FREE for Out-of-School Youth", 1),
    new Components.Option("Windows Server Administration", "You will learn how to automate manual server administration tasks using powershell", "FREE for Out-of-School Youth", 1),
    new Components.Option("Windows Server Administration", "You will learn how to automate manual server administration tasks using powershell", "FREE for Out-of-School Youth", 1),
    new Components.Option("Windows Server Administration", "You will learn how to automate manual server administration tasks using powershell", "FREE for Out-of-School Youth", 1)
  ];

  return (
    <>
      {options.map((option) => <Components.OptionCard title={option.title} info={option.info} fee={option.fee} duration={option.duration}/>)}
      
    </>
  );
}

export default App
