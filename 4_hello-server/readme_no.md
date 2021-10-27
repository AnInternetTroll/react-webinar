# Hva er react?

React er en JavaScript bibliotek/rammeverk lagdt av Facebook og lagdt ut i 2013. I dag den er brukt i mange mange steder, som microsoft sitt websites [(bare ikke ms teams enda)](https://twitter.com/rishmsft/status/1408085784016539653), finn.no, speedrun.com (cirka ~2021) og flere mer.

# Setup

## JSX
Først trenger du en "kompilator" fra JSX til vanlig JavaScript. Jeg skrev min egen [liten skript](../compiler.ts) med [deno](https://deno.land) og [swc](https://deno.land/x/swc), men vanlig vis skal du se mange kompilatorer, som webpack, babel, eller TypeScript (som deno bruker hvis `--no-check` er **ikke** brukt, eller så bruker den swc som er en rust ting blah blah ikke viktig)

Alt dette er for å bruke JSX syntax, som er forklært i [1_react-or-miss](../1_react-or-miss/)

For å bruke HTML filene må du først

1. Ha en web server (such as with `python -m http.server` or whatever)
2. Kjør `../compiler.ts index.tsx > index.js` i hvilken folder som du er i. 

## SSR Advanced
// nextjs?

# Andre notater som jeg vet ikke hvor de skal

1. Gjennom dette skal jeg snakke om react, men jeg skal faktisk bruke [preact](https://preactjs.com) som er som react, men med 3 forskjelige funksjonner eller noe. Jeg liker denne bibliotek. 
