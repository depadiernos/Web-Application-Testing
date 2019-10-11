import React, { useState } from "react";
import Display from "./components/Display";
import Dashboard from "./components/Dashboard";

function App() {
  const [data, setData]=useState({
    ballCount: 0,
    strikeCount: 0,
    foulCount: 0,
    hitCount: 0
  })

const updateCount = (name, count)=>{
  setData({...data, [name]: count+1})
}

  return (
    <div className="App">
      <h1>Baseball Count Dashboard</h1>
      <Display data={data} />
      <Dashboard data={data} handleClick={updateCount}/>
    </div>
  );
}

export default App;
