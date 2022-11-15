import TheRestoDbSource from '../../data/therestodb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `         
    <section class="content">
    <div class="latest" id"latest">
        <div class="latest__label">
        <h2>Daftar Restaurant</h2>
        <loader-bar></loader-bar>
        </div>
        <div class="posts" id="posting"></div>
    </div>
</section>`;
  },

  async afterRender() {
    const restoCardContainer = document.querySelector('#latest');
    const allRestoPosts = document.querySelector('#posting');
    const loader = document.querySelector('.loader');

    try {
      const data = await TheRestoDbSource.getRestoList();

      loader.style.display = 'none';
      window.scrollTo(0, 0);
      data.restaurants.forEach((resto) => {
        allRestoPosts.innerHTML += createRestaurantItemTemplate(resto);
      });
    } catch (error) {
      console.log(error);
    }
  },
};

export default Home;
