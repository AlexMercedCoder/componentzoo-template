import { ChainElement } from "../lib/componentzoomodule.js";

class MyHeader extends ChainElement {
    builder(state, props) {
      return `<h1>I am the ${props.word} component</h1>`;
    }
  }
  
  customElements.define("my-header", MyHeader);