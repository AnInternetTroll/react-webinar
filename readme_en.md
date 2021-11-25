# What is react?

React is a JavaScript library/framework made by facebook and open sourced
in 2013. Today it is used in many many places, such as microsoft's websites
[(just not ms teams yet)](https://twitter.com/rishmsft/status/1408085784016539653),
finn.no, speedrun.com (since ~2021) and many many more.

# Setup

## JSX

You need a compiler from JSX to normal javascript. For sake of laziness I will
use [a little script](../compiler.ts) I wrote with [deno](https://deno.land) and
[swc](https://deno.land/x/swc), but in the wild you might see many compilers,
such as webpack, babel, or the typescript compiler (which deno uses if
`--no-check` is **not** passed, otherwise it will use swc which is a rust thing
blah blah not important).

All of that is for the JSX syntax, which will be covered in
[1_react-or-miss](../1_react-or-miss/)

To run any of the html files you must first

1. Host a web server (such as with `python -m http.server` or whatever)
2. Run `../compiler.ts index.tsx > index.js` in whatever folder you happen to be
   in.

# Sidenotes that idk where to put

1. Throughout this thing I'll mention react a lot, but I'll likely be using
   [preact](https://preactjs.com/) which is react but smaller and with like 3
   different functions. I really like this library.
