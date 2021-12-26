import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);
  return (
    <>
      <section className="container">
        <h3>{people.length} Birthday Today</h3>

        <List people={people} />

        <button className="btn" onClick={() => setPeople([])}>
          clear all
        </button>
      </section>
    </>
  );
}

export default App;
