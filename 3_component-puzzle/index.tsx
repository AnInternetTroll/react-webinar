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
        {this.state.number}
        <button onClick={() => this.onClick()}>Click me!</button>
      </div>
    );
  }
}

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
