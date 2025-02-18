import { html, render } from "https://unpkg.com/lit-html?module";

const htmlTemplate = () => html`
  <style>
    .letter {
      background-color: #00FFF8;
      color: #22002B;
      font-size: 1.6rem;
      line-height: 3rem;
      width: 3rem;
      height: 3rem;
      border-radius: 1.5rem;
      letter-spacing: -0.2rem;
      font-weight: bold;
      overflow: visible !important;
    }
  </style>
  <span class="letter">
    Z/>
  </span>
`;

class LetterZ extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    render(htmlTemplate(), this._shadowRoot);
  }
}

window.customElements.define("letter-z", LetterZ);
