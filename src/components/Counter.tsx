import React, { useState } from "react";

export default function Counter({
  description,
  defaultCount,
}: {
  description: string;
  defaultCount: number;
}) {
  const [count, setCount] = useState(defaultCount);
  const [incremrntor, setIncremrntor] = useState(1);

  return (
    <>
      <div style={{ width: "500px" }}>current count is {count}</div>
      <label>
        Incrementor :
        <input
          value={incremrntor}
          onChange={(ev) => setIncremrntor(parseInt(ev.target.value) || 0)}
          type="number"
        />
      </label>
      {description}
      <button
        aria-label="add counter"
        onClick={() => setCount(count + incremrntor)}
      >
        +
      </button>
      <button aria-label="subtract counter" onClick={() => setCount(count - 1)}>
        -
      </button>
    </>
  );
}
