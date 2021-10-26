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
