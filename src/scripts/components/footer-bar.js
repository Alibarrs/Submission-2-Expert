class footerBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
                           <footer>Copyright &copy; 2022 - Muh Alief Akbar</footer>
                          `;
  }
}

customElements.define('footer-bar', footerBar);
