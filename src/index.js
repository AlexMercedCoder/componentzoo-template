import { ChainElement } from "./lib/componentzoomodule.js";
import "./components/Header";
import "./components/Main";
import "./components/Footer";
import "./styles.scss";

class MyApp extends ChainElement {
  builder(state, props) {
    return `<h1>Hello World</h1>
    <my-header word="header"></my-header>
    <my-main></my-main>
    <my-footer></my-footer>`;
  }
}

customElements.define("my-app", MyApp);

//Inject into body
const body = document.querySelector("body");
body.innerHTML = `<my-app></my-app>`;
