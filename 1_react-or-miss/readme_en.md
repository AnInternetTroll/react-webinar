# JSX?

JSX is a syntactical sugar over JavaScript to make it look nice when writing
react code.

It's best demonstrated with an example:

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

JSX aims to bring your visuals and your logic closer toghether in one file. It
uses the XML (or HTML) syntax in JavaScript to be as understandable as possible.
