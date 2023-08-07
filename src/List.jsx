import { useState } from "react";

import "./App.css";

function List({ person }) {
  return (
    <>
      {person.map((bday) => {
        const { name, age, id, image } = bday;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
}

export default List;
