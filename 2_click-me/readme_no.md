# Hvorfor skal jeg bry meg med JSX når jeg har DOMen?

JSX (og React) er lett. La oss se på et eksempel på en knapp som øker et tall når vi trykker på en knapp i vanlig JS og react.

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

Her fra skal eksempler bare øke i komplessitet, med bruk av react hooks, som `useEffect` som lar deg kjøre funksjoner når variabler endrer, ting som er mulig i vanilla JS, men da må du gjenoppfinne hjulet når det kommer om event handling. 
