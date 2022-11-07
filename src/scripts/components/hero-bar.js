class heroBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
                      <div class="hero">
                         <div class="hero__inner">
                            <h1 class="hero__title">RESTORAN TERENAK DAN TERNYAMAN</h1>
                              <p class="hero__tagline">
                                Anda Lapar? jangan masak, kamilah solusinya
                              </p>
                          </div>
                       </div>
                      `;
  }
}

customElements.define('hero-bar', heroBar);
