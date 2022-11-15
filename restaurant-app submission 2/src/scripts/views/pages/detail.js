import UrlParser from '../../routes/url-parser';
import TheRestoDbSource from '../../data/therestodb-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButton from '../../utils/like-button-initiator';
import FormReviewInitiator from '../../utils/form-review-initiatior';

const Detail = {
  async render() {
    return `
      <div class="detail-resto__card">
        <h1 class="detail-resto__title">Detail Restoran</h1>
        <loader-bar></loader-bar>
        <div id="likeButtonContainer"></div>
        <div class="detail-resto__content" id="detail-content"></div>
        <div class="detail-form" id="detail-form">
            <h1>Tambahkan review</h1>
            <div id="formReviewContainer"></div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantContainer = document.querySelector('#detail-content');
    const detailForm = document.querySelector('#detail-form');
    const loader = document.querySelector('#loader');

    try {
      const data = await TheRestoDbSource.getRestoDetail(url.id);

      loader.style.display = 'none';
      window.scrollTo(0, 0);

      restaurantContainer.innerHTML += createRestaurantDetailTemplate(data.restaurant);

      FormReviewInitiator.init({
        formReviewContainer: document.querySelector('#formReviewContainer'),
        id: data.restaurant.id,
      });

      LikeButton.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        restaurant: {
          id: data.restaurant.id,
          name: data.restaurant.name,
          description: data.restaurant.description,
          pictureId: data.restaurant.pictureId,
          city: data.restaurant.city,
          rating: data.restaurant.rating,
        },
      });
    } catch (error) {
      console.log(error);
      loader.style.display = 'none';
      restaurantContainer.innerHTML = '<h1> error </h1>';
      detailForm.style.display = 'none';
    }
  },
};

export default Detail;
