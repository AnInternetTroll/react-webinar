#!/usr/bin/env -S deno run --allow-read --no-check
import { parse, print, transform } from "https://deno.land/x/swc@0.1.4/mod.ts";

// this is a comment

const files = Deno.args.map((file) => Deno.readTextFileSync(file));
for (let i = 0; i < files.length; i++) {
  Deno.core.print(
    print(
      parse(
        transform(files[i], {
          // @ts-ignore types are wrong
          jsc: {
            parser: { comments: false },
            target: "es2016",
            parser: {
              syntax: "typescript",
              tsx: true,
            },
          },
        }).code,
        {
          target: "es2019",
          syntax: "typescript",
          tsx: true,
          comments: false,
        },
      ),
      {
        minify: false,
        module: {
          type: "es6",
        },
      },
    ).code,
  );
}
