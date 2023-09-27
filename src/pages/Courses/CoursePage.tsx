import "./course-page.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MessageCard from "../../components/MessageCard/MessageCard";

interface Props
{
  content: {
    title: string[];
    key: string;
    show_key: boolean;
    info: string;
    descriptions: string[];
    opportunities: string[];
    expectations: {
        description: string;
        objectives: string[];
    };
    outline: string[];
    fee: string;
    certificate_fee: string;
    duration: string;
    deliveries: string[];
    prereqs: string[];
    validity: string;
  }
}

const CoursePage = ({content} : Props) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  return (
    <><main>
    <h2 className='main-title'>{content.title.join(" ")}</h2>
    <h2 className='main-subtitle'>{content.show_key ? `(${content.key})` : ""}</h2>
    <div className='main-content'>
      <section className="course-page-section course-page-descriptions">
        {content.descriptions.map((description, id) => <p key={id} id={`course-page-description-${id}`} className="course-page-description">{description}</p>)}
      </section>
      <section className="course-page-section course-page-opportunities">
        <h3 className="course-page-section-title">Career Opportunity</h3>
        <ul className="course-page-section-list">
          {content.opportunities.map((opportunity, id) => <li key={id} id={`course-page-opportunity-${id}`} className="course-page-opportunity">{opportunity}</li>)}
        </ul>
      </section>
      <section className="course-page-section course-page-expectations">
        <h3 className="course-page-section-title">Course Expectations</h3>
        <p className="course-page-section-info">{content.expectations.description}</p>
        <ul className="course-page-section-list">
          {content.expectations.objectives.map((expectation, id) => <li key={id} id={`course-page-expectation-${id}`} className="course-page-expectation">{expectation}</li>)}
        </ul>
      </section>
      <section className="course-page-section course-page-course-outline">
        <h3 className="course-page-section-title">Course Outline</h3>
        <ul className="course-page-section-list">
          {content.opportunities.map((opportunity, id) => <li key={id} id={`course-page-opportunity-${id}`} className="course-page-opportunity">{opportunity}</li>)}
        </ul>
      </section>
      <section className="course-page-section course-page-course-fee">
        <h3 className="course-page-section-title">Course Fee</h3>
        <p className="course-page-section-info">{content.fee}</p>
      </section>
      <section className="course-page-section course-page-course-cert-fee">
        <h3 className="course-page-section-title">Certification Exam Fee</h3>
        <p className="course-page-section-info">{content.certificate_fee}</p>
      </section>
      <section className="course-page-section course-page-course-duration">
        <h3 className="course-page-section-title">Duration</h3>
        <p className="course-page-section-info">{content.duration}</p>
      </section>
      <section className="course-page-section course-page-course-delivery">
        <h3 className="course-page-section-title">Course Delivery</h3>
        <ul className="course-page-section-list">
          {content.opportunities.map((delivery, id) => <li key={id} id={`course-page-delivery-${id}`} className="course-page-delivery">{delivery}</li>)}
        </ul>
      </section>
      <section className="course-page-section course-page-course-prereqs">
        <h3 className="course-page-section-title">Pre-Requisites</h3>
        <ul className="course-page-section-list">
          {content.opportunities.map((prereq, id) => <li key={id} id={`course-page-prereq-${id}`} className="course-page-prereq">{prereq}</li>)}
        </ul>
      </section>
      <section className="course-page-section course-page-course-validity">
        <h3 className="course-page-section-title">Certification Validity</h3>
        <p className="course-page-section-info">{content.validity}</p>
      </section>
      <button className="button course-page-enroll" onClick={() => setShow(true)}>Enroll</button>
      <button className="button course-page-back" onClick={() => navigate("/Courses")}>&lt;</button>
    </div>
    </main>
    <MessageCard forceShow={setShow} show={show} />
    </>
  )
}

export default CoursePage