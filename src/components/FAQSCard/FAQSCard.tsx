import { ReactNode } from "react";
import { useState, useEffect } from "react";
import "./faqs-card.css";
import EffectsContainer from '../Effects/EffectsContainer';

interface Props {
  defaultActiveKey: number | -1;
  children: {
    eventKey: number;
    header: string;
    body: ReactNode;
  }[];
}

const FAQSCard = ({ children, defaultActiveKey = -1 }: Props) => {
  const [activeKey, setActiveKey] = useState(defaultActiveKey);

  return (
    <>
      {children.map(child =>
      <EffectsContainer key={child.eventKey} effects="fromLeft">
        <section className={`faqs-card-item ${
            activeKey === child.eventKey ? "active" : ""
        }`}>
            <button
            className="faqs-card-header"
            onClick={() => setActiveKey(activeKey === child.eventKey ? defaultActiveKey : child.eventKey)}
            >
            {child.eventKey}. {child.header}
            </button>
            <div
            id={`faqs-card-${child.eventKey}`}
            className={`faqs-card-body `}
            >
            {child.body}
            </div>
        </section>
      </EffectsContainer>
      )}
    </>
  );
};

export default FAQSCard;
