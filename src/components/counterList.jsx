import React, { useState } from "react";
import Counter from "./counter";

const CounterList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Useless item" },
    { id: 1, value: 4, name: "Spoon" },
    { id: 2, value: 0, name: "Fork" },
    { id: 3, value: 0, name: "Plate" },
    { id: 4, value: 0, name: "Minimalist's kit" },
  ];

  const [counters, setCounters] = useState(initialState);

  const handleDelete = (id) => {
    const newCounters = counters.filter((c) => c.id !== id);
    setCounters(newCounters);
  };

  const handleReset = () => {
    setCounters(initialState);
  };

  const handleIncrement = (id) => {
    setCounters((prevState) =>
      prevState.map((c) => ({
        ...c,
        value: (c.value += c.id === id ? 1 : 0),
      }))
    );
  };

  const handleDecrement = (id) => {
    setCounters((prevState) =>
      prevState.map((c) => ({
        ...c,
        value: (c.value -= c.id === id ? 1 : 0),
      }))
    );
  };

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          {...count}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Reset
      </button>
    </>
  );
};

export default CounterList;
