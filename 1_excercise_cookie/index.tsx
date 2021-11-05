/** @jsx h */
import { h, render } from "https://esm.sh/preact";
import { useState } from "https://esm.sh/preact/hooks";

function restart() {
  alert("Ikke mer kjeks til deg");
  location.reload();
}

function Index() {
  const [cookies, setCookies] = useState(0);
  return (
    <div>
      <h1>Cookies: {cookies}</h1>
      <img
        src="./cookie.png"
        onClick={() => cookies === 100 ? restart() : setCookies(cookies + 1)}
      />
    </div>
  );
}

render(<Index />, document.body);
