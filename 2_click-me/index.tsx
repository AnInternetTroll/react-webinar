/**
 * @jsx h
 * @jsxFrag Fragment
 */
import { Fragment, h, render } from "https://esm.sh/preact";
import { useState } from "https://esm.sh/preact/hooks";

function Index() {
  const [number, setNumber] = useState(0);
  return (
    <>
      <p id="msg">
        Hello, world!
        <br />
        {number}
      </p>
      <button onClick={() => setNumber(number + 1)}>
        Click me
      </button>
    </>
  );
}

render(<Index />, document.getElementById("react"));
