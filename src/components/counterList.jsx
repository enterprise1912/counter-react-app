import React from "react";
import Counter from "./counter";

const CounterList = () => {
  const counters = [
    { id: 0, value: 0, name: "Useless item" },
    { id: 1, value: 4, name: "Spoon" },
    { id: 2, value: 0, name: "Fork" },
    { id: 3, value: 0, name: "Plate" },
    { id: 4, value: 0, name: "Minimalist's kit" },
  ];
  return (
    <>
      {counters.map((count) => (
        <Counter key={count.id} value={count.value} name={count.name} />
      ))}
    </>
  );
};

export default CounterList;
