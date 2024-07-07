
import React, { useState } from "react";
import './../styles/App.css';
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";

const App = () => {
const [selectedOption,setselectedOption]=useState('');
  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <ChildComponent1 select={setselectedOption} />
      <ChildComponent2 select={setselectedOption} />
      
     Selected Option: {selectedOption}
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
