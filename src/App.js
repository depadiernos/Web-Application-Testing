import React, { useState } from "react";
import Display from "./components/Display";
import Dashboard from "./components/Dashboard";

function App() {
  const [data, setData] = useState({
    ballCount: 0,
    strikeCount: 0,
    foulCount: 0,
    hitCount: 0
  });

  const updateCount = (name, count) => {
    if (name === "ballCount" && count === 3) {
      count = 0;
    } else if (name === "strikeCount" && count === 2) {
      count = 0;
    } else {
      count += 1;
    }
    setData({ ...data, [name]: count });
  };

  return (
    <div className="App">
      <h1>Baseball Count Dashboard</h1>
      <Display data={data} />
      <Dashboard data={data} handleClick={updateCount} />
    </div>
  );
}

export default App;
