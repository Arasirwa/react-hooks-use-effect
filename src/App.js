import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setTimeout(() => setCount(0), 5000);
  }, []);

  console.log("rendering");

  return (
    <div>
      <h1>useEffect</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        I've been clicked {count} times
      </button>
      <input
        type="text"
        placeholder="Type away..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default App;
