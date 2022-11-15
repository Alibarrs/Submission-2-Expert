class LoaderBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<div class="loader" id="loader"></div>`;
  }
}

customElements.define('loader-bar', LoaderBar);
