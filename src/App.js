import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  
  const [counter, setCounter] = useState( 1 );

  console.log({counter});
  
  let name= "Count ("+counter.toString()+")";
  console.log(name)

  useEffect( () => {document.title=name});

  return (

   
     

    <div className="App">
      <h1>({name})</h1>
      <button 
      type="button"
       onClick={() => setCounter (counter+1)} >Count ({counter})</button>
    </div>
  );
}

export default App;
