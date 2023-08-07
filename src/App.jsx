import { useState } from "react";
import Data from "./Data";
import List from "./List";

import "./App.css";

function App() {
  const [person, setPerson] = useState(Data);
  return (
    <main>
      <section className="container">
        <h3> {person.length} birthday today</h3>
        <List person={person} />
        <button onClick={() => setPerson([])}> clear</button>
      </section>
    </main>
  );
}

export default App;
