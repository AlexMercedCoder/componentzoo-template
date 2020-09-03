import { ChainElement } from "../lib/componentzoomodule.js";

class MyMain extends ChainElement {
    constructor(){
      super({word:'Main'})
    }

    builder(state, props) {
      return `<h1>I am the ${state.word} component</h1>
      <button>Click Me</button>`;
    }

    postBuild(state, props) {
      const element = this
      ChainElement.shad.select(element,'button').addEventListener('click', () => {
        element.setState({word: 'main'})
      })
    }
  }
  
  customElements.define("my-main", MyMain);
