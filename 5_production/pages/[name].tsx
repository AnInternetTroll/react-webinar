/** @jsx h */
import { h, PageProps } from "../deps.ts";

export default function Greet(props: PageProps) {
  return (
    <div>
      Hello {props.params.name}, did you know {Deno.build.os} is the best OS?
    </div>
  );
}
