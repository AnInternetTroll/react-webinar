/** @jsx h */
import { h, IS_BROWSER, PageConfig, useState } from "../deps.ts";

export default function Home() {
  return (
    <div>
      <p>
        Here's a little counter button thing.
      </p>
      <Counter />
      <p>{IS_BROWSER ? "Viewing browser render." : "Viewing JIT render."}</p>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count - 1)} disabled={!IS_BROWSER}>
        -1
      </button>
      <button onClick={() => setCount(count + 1)} disabled={!IS_BROWSER}>
        +1
      </button>
    </div>
  );
}

export const config: PageConfig = { runtimeJS: true };
