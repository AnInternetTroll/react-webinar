/** @jsx h */
import { h, render } from "https://esm.sh/preact";

function Index() {
  return (
    <p id="msg">
      Hello, world!
    </p>
  );
}

render(<Index />, document.getElementById("react"));
