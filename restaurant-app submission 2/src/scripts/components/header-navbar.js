class headerNavbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = ` <header class="header">
                             <div class="header-left">
                                <a href="#"><h1><span>REST</span>oran</h1></a>
                             </div>

                             <nav id="navigationDrawer" class="header-right">
                                <ul class="nav-list">
                                    <li class="nav-item"><a href="/">Home</a></li>
                                    <li class="nav-item"><a href="#">Favorite</a></li>
                                    <li class="nav-item"><a href="https://www.linkedin.com/in/muh-alief-akbar-9ba650205/">About</a> </li>
                                </ul>
                             </nav>
                             <button id="hamburgerButton" class="hamburger">☰</button>
                            </header> `;
  }
}

customElements.define('header-navbar', headerNavbar);
