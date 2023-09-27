import "./message-card.css";
import { CoursesData } from "../../server/data";
import { useRef, useState, useEffect } from "react";

interface Props {
    show: boolean;
    forceShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const MessageCard = ({show, forceShow} : Props) => {
  if (!show) return;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");

  const wrapperRef = useRef(null);
  const handleClickOutside = (event: Event) => (wrapperRef.current) && forceShow(false);
  
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [wrapperRef]);
  return (
    <section className="main-popup">
      <form className="message-card" ref={wrapperRef}>
        <h2 className="message-card-title">Fill up the necessary details to enroll</h2>
        <label>Name:</label>
        <input className="message-card-input" type="text" name="name" id="message-card-name" onChange={(e) => setName(e.target.value)} required />
        
        <label>Email:</label>
        <input className="message-card-input" type="email" name="email" id="message-card-email" onChange={(e) => setEmail(e.target.value)} required />

        <label>Phone:</label>
        <input className="message-card-input" type="tel" name="phone" id="message-card-phone" onChange={(e) => setPhone(e.target.value)} required />
        
        <label>Course:</label>
        <select className="message-card-input" name="course" id="message-card-course" defaultValue={course} onChange={(e) => setCourse(e.target.value)} required >
            <option className="message-card-option" value="" hidden disabled>Course:</option>
            {CoursesData.map((course, id) =>
            <option className="message-card-option" key={id} value={course.title.join(" ")}>{course.title.join(" ")}</option>
            )}
        </select>
        
        <br />
        <button className="button" type="submit" onClick={() => console.log("SENT")}>Submit</button>
      </form>
    </section>
  );
};

export default MessageCard;
