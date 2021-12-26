import React from "react";
import data from "./data";
const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name}></img>
            <div>
              <h2>{name}</h2>
              <h4>{age} years</h4>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
