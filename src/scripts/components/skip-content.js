class skipContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
                           <a href="#content" class="skip-link">Mau skip konten ?</a>
                        `;
  }
}

customElements.define('skip-content', skipContent);
