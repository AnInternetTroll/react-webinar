# Why bother with JSX when I already have the DOM?

JSX, and react for that matter, is easy. Let's look at a button that increments
a button in vanilla and react:

- React

```jsx
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
```

- Vanlilla

```js
let number = 0;
const numberEl = document.createElement("p");
const buttonEl = document.createElement("button");
numberEl.innerText = number;
buttonEl.onclick = () => numberEl.innerText = ++number;
buttonEl.innerText = "Press me!";
const targetEl = document.getElementById("vanilla");
targetEl.innerHTML = `Hello, world`;
targetEl.appendChild(numberEl);
targetEl.appendChild(buttonEl);
```

From here examples will just increase in complexity, such as using react hooks
like `useEffect` which lets you run functions when state changes, stuff which
are possible in vanilla JS, but would require you to re-invent the wheel in
terms of event handling.
