const template = document.createElement('template');
template.innerHTML = `
  <style>
    h3 {
      color: coral;
    }
  </style>
  <div class="user-card">
    <h3></h3>
  </div>
`

class UserCard extends HTMLElement {
  // this keyword used to reference our custom element and what is attached to it
  constructor() {
    // super() methods calls on the constructor of the HTMLElement class we're extending
    super();

    // attaching shadow dom to this custom element
    this.attachShadow({ mode: 'open'});
    // cloneNode: returns a copy of the node, if deep is true also returns node's descendants
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    // use shadowRoot to select and manipulate stuff from our custom element
    this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
  }
}

window.customElements.define('user-card', UserCard)