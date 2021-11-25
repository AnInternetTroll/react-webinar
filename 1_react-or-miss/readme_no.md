# JSX?

JSX er en "smak" av JavaScript (eller TypeScript) som gjør det vakerer å skrive
react kode.

Det er best forklært med en eksempel.

- JSX

```jsx
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
```

- Vanilla

```js
import { h, render } from "https://esm.sh/preact";
function Index() {
  return (h("p", {
    id: "msg",
  }, "Hello, world!"));
}
render(h(Index, null), document.getElementById("react"));
```

JSX sitt mål er å få dine visuele og logikk regler sammen i et fil. Den bruker
XML (eller HTML) syntax i JavaScript for å gjøre det veldig lett å forstå.
