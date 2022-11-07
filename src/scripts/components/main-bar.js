class mainBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `    
                           <main id="mainContent">
                             <section class="content">
                               <div class="latest">
                                 <div class="latest__label">
                                   <h2>Daftar</h2>
                                 </div>
                                 <div class="posts"id="posting">
                                 </div>
                               </div>
                              </section>
                            </main>
                          `;
  }
}

customElements.define('main-bar', mainBar);
