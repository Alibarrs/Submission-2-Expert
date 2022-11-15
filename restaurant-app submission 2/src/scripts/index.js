import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';

// import components
import './components/skip-content';
import './components/header-navbar';
import './components/hero-bar';
import './components/main-bar';
import './components/footer-bar';
import './components/loader-bar';
import './components/favorite-bar';

// import views
import App from './views/app';

// import utils
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('.hamburger'),
  drawer: document.querySelector('nav ul'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
