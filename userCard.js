class UserCard extends HTMLElement {
  // this keyword used to reference our custom element and what is attached to it
  constructor() {
    // super() methods calls on the constructor of the HTMLElement class we're extending
    super();

    // attaching shadow dom to this custom element
    this.attachShadow({ mode: 'open'});
    // cloneNode: returns a copy of the node, if deep is true also returns node's descendants
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    // this keyword used to reference our custom element
    this.innerHTML = ``;
  }
}

window.customElements.define('user-card', UserCard)