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
   
   .user-card > div {
    margin-bottom: 15px;
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
    <img alt="portrait" src=""/>
    <div>
      <h3></h3>
      <div class="info">
<!--        Use slots here to reference the email and phone value's that are being passed from index.html-->
        <p><slot name="email"/></p>
        <p><slot name="phone"/></p>
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

    // set a property
    this.showInfo = true;

    // attaching shadow dom to this custom element
    this.attachShadow({ mode: 'open'});
    // cloneNode: returns a copy of the node, if deep is true also returns node's descendants
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    // use shadowRoot to select and manipulate stuff from our custom element
    this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
    this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');
  }

  toggleInfo() {
    this.showInfo = !this.showInfo;

    const info = this.shadowRoot.querySelector('.info');
    const toggleBtn = this.shadowRoot.querySelector('#toggle-info');

    if (this.showInfo) {
      info.style.display = 'block';
      toggleBtn.innerText = 'Hide Info';
    } else {
      info.style.display = 'none';
      toggleBtn.innerText = 'Show Info';
    }
  }

  // Called every time when the element is inserted into the DOM, here using it to ad an event listener
  connectedCallback() {
    this.shadowRoot.querySelector('#toggle-info').addEventListener('click', () => this.toggleInfo());
  }

  // Called every time the element is removed from the DOM, here using it to remove event listener
  disconnectedCallback() {
    this.shadowRoot.querySelector('#toggle-info').removeEventListener();
  }
}

window.customElements.define('user-card', UserCard)