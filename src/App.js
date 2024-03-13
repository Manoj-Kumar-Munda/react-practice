
import { useContext } from "react";
import Hover from "./CodedamnChallenges/Hover";
import RefDemo from "./CodedamnChallenges/RefDemo";
import TailwindDemo from "./components/TailwindDemo";
import Accordion from "./Dummy/Accordion";
import Dummy from "./Dummy/Dummy";
import "./index.css";

import { CounterContext } from "./Context/ContextProvider";
import Netflix from "./Netflix/Netflix";
import Pagination from "./components/Pagination";
import Main from "./To-do-list/Main";
import Navbar from "./cart/Navbar";
import Stepper from "./stepper/Stepper";


function App() {
  const counterState = useContext(CounterContext)
  console.log(counterState);
  return(
    <>
    {/* <CounterButtons /> */}
    {/* <TailwindDemo /> */}
      {/* <Netflix /> */}
      {/* <Dummy /> */}
      <Pagination />
      {/* <ScrollEffect /> */}
      {/* <Header /> */}
      {/* <DoubleDropdown /> */}
      {/* <Browse /> */}
      {/* <SlidingUnderlineNav /> */}
      {/* <AnimatedMenu /> */}
      {/* <Dummy /> */}
      {/* <LandingPage /> */}
      {/* <TailwindDemo /> */}
      {/* <Hamburgur /> */}
      {/* <Accordion /> */}
      {/* <Hover /> */}
      {/* <RefDemo /> */}
      {/* <Main /> */}
      {/* <Navbar /> */}
      {/* <Stepper /> */}
    </>
  )
}

export default App;
