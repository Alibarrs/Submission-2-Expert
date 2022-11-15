class favoriteBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="alert"> 
     <p> <strong>Info!</strong> Anda belum menambahkan restoran favorite! </p>
    </div>`;
  }
}

customElements.define('favorite-bar', favoriteBar);
