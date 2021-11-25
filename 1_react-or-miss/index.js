import { h, render } from "https://esm.sh/preact";
function Index() {
  return (h("p", {
    id: "msg",
  }, "Hello, world!"));
}
render(h(Index, null), document.getElementById("react"));
