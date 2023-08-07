import { useState } from "react";
import Data from "./Data";
import List from "./List";

import "./App.css";

function App() {
  return (
    <main>
      <section className="container">
        <h3> 0 birthday today</h3>
        <List />
        <button onClick={() => console.log("clearn me ")}> clear</button>
      </section>
    </main>
  );
}

export default App;
