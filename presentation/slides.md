---
layout: cover
title: React og SSR
---

# React og SSR

A brief introduction to your future job.

---
layout: cover
---

# Hvem er denne presentasjonen for?
1. JavaScript utviklerer.
2. Frontend developers.
3. Folk som vil ha en jobb.

---
layout: center
---

# Hva er react?

React er en JavaScript bibliotek/rammeverk lagdt av Facebook og lagdt ut i 2013.
I dag den er brukt i mange mange steder, som microsoft sitt websites
[(bare ikke ms teams enda)](https://twitter.com/rishmsft/status/1408085784016539653),
finn.no, speedrun.com (cirka ~2021) og flere mer.

---

# Setup - JSX

JSX er en "smak" av JavaScript (eller TypeScript) som gjør det vakrere å skrive
react kode.

<!--
Først trenger du en "kompilator" fra JSX til vanlig JavaScript. Jeg skrev min egen [liten skript](../compiler.ts) med [deno](https://deno.land) og [swc](https://deno.land/x/swc), men vanlig vis skal du se mange kompilatorer, som webpack, babel, eller TypeScript (som deno bruker hvis `--no-check` er **ikke** brukt, eller så bruker den swc som er en rust ting blah blah ikke viktig)

JSX sitt mål er å få dine visuele og logikk regler sammen i et fil. Den bruker XML (eller HTML) syntax i JavaScript for å gjøre det veldig lett å forstå.

Det er best forklært med en eksempel.
-->

---
layout: two-cols
url: "http://localhost:8000/1_react-or-miss/"
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
layout: iframe
url: "http://localhost:8000/1_react-or-miss/"
---

---

# Hvorfor skal jeg bry meg med JSX når jeg har DOMen?

JSX (og React) er lett. La oss se på et eksempel på en knapp som øker et tall
når vi trykker på en knapp i vanlig JS og react.

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

- Vanilla

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

---
layout: iframe
url: "http://localhost:8000/2_click-me/"
---

---
layout: iframe-right
url: "http://localhost:8000/1_excercise_cookie/"
---

# 1. Oppgave - Cookies
[cookie.swifu.wtf](https://cookie.swifu.wtf/) er Johans sitt vebside uten react. Kan vi lage den med react?

5 min

Stuck? Se på [fasitten](https://git.aninternettroll.xyz/aninternettroll/react-webinar/src/branch/master/1_excercise_cookie/index.tsx) 

---

# Komponenter

Du kan lage dine egne tagger!

Dette tilater deg å lage komponenter for alt i en side og det blir lettere å få
oversikt over. Som en komponent for en login box eller bare for en input
element.

---
layout: two-cols
---

<template v-slot:default>

```tsx {8-26|8}
/**
 * @jsx h
 * @jsxFrag Fragment
 */
import { Component, Fragment, h, render } from "https://esm.sh/preact";
import { useState } from "https://esm.sh/preact/hooks";

class Counter extends Component {
  constructor() {
    super();
    this.state = { number: 0 };
  }

  onClick() {
    this.setState({ number: this.state.number + 1 });
  }

  render() {
    return (
      <div>
        {number}
        <button onInput={() => this.onClick}>Click me!</button>
      </div>
    );
  }
}
```

</template>

<template v-slot:right>

```tsx {1-7|1|1,11-14}
function Hello() {
  return (
    <h1>
      Hello, world!
    </h1>
  );
}

function Index() {
  return (
    <>
      <Hello />
      <Counter />
    </>
  );
}

render(<Index />, document.body);
```

</template>
---

---
layout: iframe
url: "http://localhost:8000/3_component-puzzle/"
---

# Klasser vs Funksjoner

Bruk klasser hvis Geir skal se på koden din. Funksjoner er bedre i alle andre
muligheter.

# Hei, dette har jeg sett før

- [Vanilla extend HTMLElement](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)
- [Vue Components](https://vuejs.org/v2/guide/#Composing-with-Components)
- [Svelte's custom elements](https://svelte.dev/docs#Custom_element_API)

Denne kode stylen er populært.

---

# Server Side Rendering (SSR)

Hvis du trenger å få data fra en database eller enn ann sted er det lurt å generere HTMLen på en Server før klienten for websiten. 

---

```tsx {all|7-16,19}
#!/usr/bin/env -S deno run --allow-net --no-check
/** @jsx h */
import { h } from "https://esm.sh/preact";
import render from "https://esm.sh/preact-render-to-string";
import { listenAndServe } from "https://deno.land/std@0.113.0/http/server.ts";

function Index() {
  return (
    <div>
      <p>
        Hello, world, document is {typeof document}. I am running on{" "}
        {Deno.build.os}
      </p>
    </div>
  );
}

listenAndServe(":8000", () =>
  new Response(render(<Index />), {
    headers: {
      "Content-Type": "text/html",
    },
  }));

console.log("Started on http://localhost:8000");
```

---
layout: center
---

# Recap
Hva har vi lært i dag?

---
layout: two-cols
---

::default::

# JSX
```jsx
function Index() {
    return <p>Hello, world!</p>
}
```

# State
```jsx
const [state, setState] = useState(0)
return <div>
  <p>{state}</p>
  <button onClick={() => setState(state + 1)}>Click me!</button>
</div>;
```

::right::

# SSR 
```jsx
function Page() {
    return <html>
      <head>
        <title> My shopping website! </title>
        <meta name="name:og" content="shopping" />
      </head>
      <body>
        hello 
      </body>
    </html>
  }
```

# Kult rammeverker
* [AlephJS](https://alephjs.org)
* [NextJS](https://nextjs.org)

---
layout: statement
---
# Q&A 
Spørsmål?
