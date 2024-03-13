import React, { useState } from 'react';
import './Accord.css'; // You can style your accordion in a CSS file

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={toggleAccordion}>
        {title}
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

const Accordion = () => {
  return (
    <div className="accordion-container">
      <div className="column">
        <AccordionItem
          title="Section 1"
          content="Content for section 1 goes here."
        />
        <AccordionItem
          title="Section 2"
          content="Content for section 2 goes here."
        />
      </div>
      <div className="column">
        <AccordionItem
          title="Section 3"
          content="Content for section 3 goes here."
        />
        <AccordionItem
          title="Section 4"
          content="Content for section 4 goes here."
        />
      </div>
    </div>
  );
};

export default Accordion;
