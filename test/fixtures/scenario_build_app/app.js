import { LitElement, html } from "lit-element";
import { add } from "./utils.js";

class MyElement extends LitElement {
  static get properties() {
    return {
      myString: { type: String },
      myArray: { type: Array },
      myBool: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.myString = "Hello World";
    this.myArray = ["an", "array", "of", "test", "data"];
    this.myBool = true;
  }

  render() {
    return html`
      <p>${this.myString}</p>
      <p>Adding 2 + 2 ${add(2, 2)}</p>
      <ul>
        ${this.myArray.map((i) => html`<li>${i}</li>`)}
      </ul>
      ${this.myBool
        ? html`<p>Render some HTML if myBool is true</p>`
        : html`<p>Render some other HTML if myBool is false</p>`}
    `;
  }
}

customElements.define("my-element", MyElement);
