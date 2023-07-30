import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "What is React?",
    text: `The React.js framework is an open-source JavaScript framework and library developed by Facebook. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.

    In React, you develop your applications by creating reusable components that you can think of as independent Lego blocks. These components are individual pieces of a final interface, which, when assembled, form the application's entire user interface.  `,
  },
  {
    title: "A Brief History of React.js?",
    text: `Back in 2011, Facebook had a massive user base and faced a challenging task. It wanted to offer users a richer user experience by building a more dynamic and more responsive user interface that was fast and highly performant.

    Jordan Walke, one of Facebook’s software engineers, created React to do just that. React simplified the development process by providing a more organized and structured way of building dynamic and interactive user interfaces with reusable components.
    
    Facebook’s newsfeed used it first. Due to its revolutionary approach to DOM manipulation and user interfaces, React dramatically changed Facebook's approach to web development and quickly became popular in JavaScript's ecosystem after its release to the open-source community.`,
  },
  {
    title: "What Is 'State' in ReactJS?",
    text: "The state is a built-in React object that is used to contain data or information about the component. A component’s state can change over time; whenever it changes, the component re-renders. The change in state can happen as a response to user action or system-generated events and these changes determine the behavior of the component and how it will render. ",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={el.title}
          num={i}
          key={el.title}
        >
          {el.text}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ num, title, curOpen, onOpen, children }) {
  const isOpen = num === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
