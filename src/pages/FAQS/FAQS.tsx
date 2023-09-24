import { FAQSCard } from "../../components";
import './faqs.css';

let faqsList = [
  {
    eventKey: 1,
    header: "Lorem ipsum dolor sit?",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla dapibus euismod. Fusce et dolor ac ex interdum viverra eu quis lectus.",
  },
  {
    eventKey: 2,
    header: "Lorem ipsum dolor sit amet?",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla dapibus euismod. Fusce et dolor ac ex interdum viverra eu quis lectus.",
  },
  {
    eventKey: 3,
    header: "Lorem ipsum dolor sit amet?",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla dapibus euismod. Fusce et dolor ac ex interdum viverra eu quis lectus.",
  },
  {
    eventKey: 4,
    header: "Lorem ipsum dolor sit amet?",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla dapibus euismod. Fusce et dolor ac ex interdum viverra eu quis lectus.",
  },
  {
    eventKey: 5,
    header: "Lorem ipsum dolor sit amet?",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla dapibus euismod. Fusce et dolor ac ex interdum viverra eu quis lectus.",
  },
  {
    eventKey: 6,
    header: "Lorem ipsum dolor sit amet?",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla dapibus euismod. Fusce et dolor ac ex interdum viverra eu quis lectus.",
  },
];

const FAQS = () => {
  return (
    <main>
      <h2 className='main-title'>FAQS</h2>
      <img className="faqs-human" src="./src/assets/icons/faqs-human.svg" alt="" />
      <FAQSCard defaultActiveKey={0} children={faqsList}/>
    </main>
  )
}

export default FAQS