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

  const updatedState = [
    { id: 0, value: 1, name: "Useless item" },
    { id: 1, value: 2, name: "Spoon" },
    { id: 2, value: 3, name: "Fork" },
    { id: 3, value: 4, name: "Plate" },
    { id: 4, value: 5, name: "Minimalist's kit" },
  ];

  const [counters, setCounters] = useState(initialState);

  const handleDelete = (id) => {
    const newCounters = counters.filter((c) => c.id !== id);
    setCounters(newCounters);
  };

  const handleReset = () => {
    setCounters(initialState);
  };

  const handleUpdate = () => {
    setCounters(updatedState);
  };

  return (
    <>
      {counters.map((count) => (
        <Counter key={count.id} onDelete={handleDelete} {...count} />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Reset
      </button>
      <button className="btn btn-primary btn-sm m-2" onClick={handleUpdate}>
        Update State
      </button>
    </>
  );
};

export default CounterList;
