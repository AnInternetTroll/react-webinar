---
layout: cover
title: React og SSR
---

# React og SSR
A brief introduction to your future job.

---

# Hva er react?

React er en JavaScript bibliotek/rammeverk lagdt av Facebook og lagdt ut i 2013. I dag den er brukt i mange mange steder, som microsoft sitt websites [(bare ikke ms teams enda)](https://twitter.com/rishmsft/status/1408085784016539653), finn.no, speedrun.com (cirka ~2021) og flere mer.

---

# Setup - JSX
JSX er en "smak" av JavaScript (eller TypeScript) som gjør det vakere å skrive react kode. 

<!--
Først trenger du en "kompilator" fra JSX til vanlig JavaScript. Jeg skrev min egen [liten skript](../compiler.ts) med [deno](https://deno.land) og [swc](https://deno.land/x/swc), men vanlig vis skal du se mange kompilatorer, som webpack, babel, eller TypeScript (som deno bruker hvis `--no-check` er **ikke** brukt, eller så bruker den swc som er en rust ting blah blah ikke viktig)

JSX sitt mål er å få dine visuele og logikk regler sammen i et fil. Den bruker XML (eller HTML) syntax i JavaScript for å gjøre det veldig lett å forstå. 

Det er best forklært med en eksempel. 
-->

---
layout: two-cols
---

<template v-slot:default>

- JSX

```jsx {all|4-10}
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
</template>
<template v-slot:right>

- Vanilla

```js {all|3-9}
import { h, render } from "https://esm.sh/preact";

function Index() {
  return (
    h("p", {
      id: "msg",
    }, "Hello, world!")
  );
}

render(h(Index, null), document.getElementById("react"));
```
</template>

---

# Hvorfor skal jeg bry meg med JSX når jeg har DOMen?

JSX (og React) er lett. La oss se på et eksempel på en knapp som øker et tall når vi trykker på en knapp i vanlig JS og react.

---
layout: two-cols
---

<template v-slot:default>

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
      <p>
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
</template>
<template v-slot:right>

- Vanlilla

```js
let number = 0;
const numberEl = document.createElement("p");
const buttonEl = document.createElement("button");
const targetEl = document.getElementById("vanilla");

numberEl.innerText = number;
buttonEl.onclick = () => numberEl.innerText = ++number;
buttonEl.innerText = "Press me!";
targetEl.innerHTML = `Hello, world`;

targetEl.appendChild(numberEl);
targetEl.appendChild(buttonEl);
```
</template>

<!--
Her fra skal eksempler bare øke i komplessitet, med bruk av react hooks, som `useEffect` som lar deg kjøre funksjoner når variabler endrer, ting som er mulig i vanilla JS, men da må du gjenoppfinne hjulet når det kommer om event handling.
-->
