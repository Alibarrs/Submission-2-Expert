class skipContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
                           <a href="#content" class="skip-link" tabindex="0" >Mau skip konten ?</a>
                        `;
  }
}

customElements.define('skip-content', skipContent);
