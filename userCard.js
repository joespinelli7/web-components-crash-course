const template = document.createElement('template');
template.innerHTML = `
  <style>
  .user-card {
    font-family: 'Arial', sans-serif;
    background: #f4f4f4;
    width: 500px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 10px;
    margin-bottom: 15px;
    border-bottom: darkorchid 5px solid;
   }

  .user-card img {
    width:: 100%;
  }

  .user-card button {
    cursor: pointer;
    background: darkorchid;
    color: #fff;
    border: 0;
    border-radius: 5px;
    padding: 5px 10px;
  }
  </style>
  <div class="user-card">
    <img />
    <div>
      <h3></h3>
      <div class="info">
        <p>Email:</p>
        <p>Phone:</p>
      </div>
      <button id="toggle-info">Hide Info</button>
    </div>
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
    this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');
  }
}

window.customElements.define('user-card', UserCard)