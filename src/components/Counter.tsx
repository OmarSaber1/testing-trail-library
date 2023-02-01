import React, { useEffect, useState } from "react";

export default function Counter({
  description,
  defaultCount,
}: {
  description: string;
  defaultCount: number;
}) {
  const [count, setCount] = useState(defaultCount);
  const [incremrntor, setIncremrntor] = useState(1);
  const [bigEngough, setBigEngough] = useState(defaultCount >= 15);

  useEffect(() => {
    let id: NodeJS.Timeout;
    if (count >= 15) {
      id = setTimeout(() => {
        setBigEngough(true);
      }, 300);
    }

    return () => clearTimeout(id);
  });

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
      <button
        aria-label="subtract counter"
        onClick={() => setTimeout(() => setCount(count - 1), 200)}
      >
        -
      </button>

      {!bigEngough && <div> too small</div>}
    </>
  );
}
