import { Component, Fragment, h, render } from "https://esm.sh/preact";
class Counter extends Component {
    onClick() {
        this.setState({
            number: this.state.number + 1
        });
    }
    render() {
        return (h("div", null, this.state.number, h("button", {
            onClick: ()=>this.onClick()
        }, "Click me!")));
    }
    constructor(){
        super();
        this.state = {
            number: 0
        };
    }
}
function Hello() {
    return (h("h1", null, "Hello, world!"));
}
function Index() {
    return (h(Fragment, null, h(Hello, null), h(Counter, null)));
}
render(h(Index, null), document.body);
