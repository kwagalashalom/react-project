import React, { useState } from "react";

const Counter = () => {
  const [Count, setCount] = useState(0);
  return (
    <div>
      <h1 className="text-2xl font-bold">{Count}</h1>

      <button
        onClick={(e) => {
          setCount(Count + 1);
        }}
        className="text-xl bg-green-500 p-3 text-white rounded-sm"
      >
        +
      </button>

      <button
        type="button"
        onClick={(e) => setCount(Count - 1)}
        className="text-xl bg-red-500 p-3 ml-4 text-white rounded-sm"
      >
        -
      </button>
    </div>
  );
};

export default Counter;
