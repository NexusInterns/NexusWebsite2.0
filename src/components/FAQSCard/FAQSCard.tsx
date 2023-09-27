import { useState } from "react";
import "./faqs-card.css";
import EffectsContainer from '../Effects/EffectsContainer';

interface Props {
  defaultActiveKey?: number | -1;
  children: {
    title: string;
    informations: {
      descriptions: string[];
      outlines: string[];
    }
  }[];
}

const FAQSCard = ({ children, defaultActiveKey = -1 }: Props) => {
  const [activeKey, setActiveKey] = useState(defaultActiveKey);

  return (
    <>
      {children.map((child, id) =>
      <EffectsContainer key={id} effects="fromLeft">
        <section className={`faqs-card-item ${
            activeKey === id ? "active" : ""
        }`}>
            <button
            className="faqs-card-header"
            onClick={() => setActiveKey(activeKey === id ? defaultActiveKey : id)}
            >
            {id+1}. {child.title}
            </button>
            <div
            id={`faqs-card-${id}`}
            className={`faqs-card-body `}
            >
              {child.informations.descriptions.map((description, id) => <p key={id}>{description}</p>)}
              <ul>
                {child.informations.outlines.map((outline, id) => <li key={id}>{outline}</li>)}
              </ul>
              
            </div>
        </section>
      </EffectsContainer>
      )}
    </>
  );
};

export default FAQSCard;
