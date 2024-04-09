import { useState } from "react";

export default function Sample01() {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>
        クリックしてください。
      </button>
    </div>
  );
}
