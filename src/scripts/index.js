import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';

// import components
import './components/skip-content';
import './components/header-navbar';
import './components/hero-bar';
import './components/main-bar';
import './components/footer-bar';

// import views
import App from './views/app';

import('../DATA.json').then(({ default: dataJson }) => {
  console.log(dataJson);
  const dataResto = dataJson.restaurants;
  let dataCardResto = '';
  dataResto.forEach((data) => {
    dataCardResto += `
     <article class="resto-card" alt="Menu untuk melihat restoran">
         <img class="resto-card__thumbnail" src="${data.pictureId}" alt="${data.name}" title="${data.name}">
         <div class="resto-card__content">
             <p class="resto-card__city">${data.city}</p>
             <p class="resto-card__date">Rating: <strong>${data.rating}</strong></p>
             <h1 class="resto-card__title"><a href="#">${data.name}</a></h1>
             <p class="resto-card__description">${data.description}</p>
         </div>
     </article>
 `;
  });
  document.querySelector('#posting').innerHTML = dataCardResto;
});

const app = new App({
  button: document.querySelector('.hamburger'),
  drawer: document.querySelector('nav ul'),
  content: document.querySelector('#mainContent'),
});
