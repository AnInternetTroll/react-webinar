import { Fragment, h, render } from "https://esm.sh/preact";
import { useState } from "https://esm.sh/preact/hooks";
function Index() {
  const [number, setNumber] = useState(0);
  return (h(
    Fragment,
    null,
    h(
      "p",
      {
        id: "msg",
      },
      "Hello, world!",
      h("br", null),
      number,
    ),
    h("button", {
      onClick: () => setNumber(number + 1),
    }, "Click me"),
  ));
}
render(h(Index, null), document.getElementById("react"));
