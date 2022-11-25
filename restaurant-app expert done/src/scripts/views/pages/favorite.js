import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `    
    <section class="content">
        <div class="latest" id"latest">
            <div class="latest__label">
                <h2>Favorite Restorant</h2>
                <loader-bar></loader-bar>
            </div>
            <div class="posts" id="posting"></div>
        </div>
    </section>`;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector('#posting');
    const loader = document.querySelector('#loader');

    const restaurant = await FavoriteRestoIdb.getAllRestos();

    if (restaurant.length === 0) {
      restaurantContainer.innerHTML = `<favorite-bar></favorite-bar>`;
    }

    loader.style.display = 'none';

    restaurant.forEach((Data) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(Data);
    });
  },
};

export default Favorite;
