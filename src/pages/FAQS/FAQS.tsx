import { FAQSCard } from "../../components";
import { FAQSData } from "../../server/data";
import './faqs.css';

const FAQS = () => {
  return (
    <main>
      <h2 className='main-title'>FAQS: How to Start your career in IT?</h2>
      <img className="faqs-human" src="./src/assets/icons/faqs-human.svg" alt="" />
      <FAQSCard children={FAQSData}/>
    </main>
  )
}

export default FAQS