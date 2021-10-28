#!/usr/bin/env -S deno run --no-check --allow-net --allow-read --allow-write=/home/luca/.cache --allow-run --allow-env=DENO_DEPLOYMENT_ID,ESBUILD_BINARY_PATH,XDG_CACHE_HOME,HOME
/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.unstable" />

import { start } from "https://raw.githubusercontent.com/lucacasonato/fresh/main/server.ts";
import routes from "./routes.gen.ts";

await start(routes);
