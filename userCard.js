class UserCard extends HTMLElement {
  constructor() {
    // super() methods calls on the constructor of the HTMLElement class we're extending
    super();
    // this keyword used to reference our custom element
    this.innerHTML = `${this.getAttribute('name')}`;
  }
}

window.customElements.define('user-card', UserCard)