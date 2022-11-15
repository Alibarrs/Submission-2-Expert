import CONFIG from '../../global/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="detail-container">

    <div class="detail-resto__img">
    <img
      class="detail-resto__thumbnail"
      src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"
      alt="${restaurant.name}"
      title="${restaurant.name}"
    />
    </div>

    <div class="detail-resto__group">
      <div class="detail-resto__top">
        <h2 class="title-restaurant">${restaurant.name}</h2>
        <div class="rating">
        <i class="fa-sharp fa-solid fa-star"></i>
        <p>${restaurant.rating}</p>
        </div>
        <p class="description-restaurant">${restaurant.description}</p>
        <p class="location-restaurant"><i class="fa-solid fa-location-dot"></i>${
          restaurant.address
        }, ${restaurant.city}</p>
      </div>

      <div class="detail-resto__bottom">
        <h3 class="detail-menu-title">Kategori</h3>
        ${restaurant.categories
          .map(
            (categori) => `
          <span class="category-name">#${categori.name}</span>
        `
          )
          .join('')}
        <h3 class="detail-menu-title">Daftar makanan</h3>
        ${restaurant.menus.foods.map(
          (food) => `
          <span class="food-name">${food.name}</span>
        `
        )}
        <h3 class="detail-menu-title">Daftar minuman</h3>
        ${restaurant.menus.drinks.map(
          (drink) => `
          <span class="drink-name">${drink.name}</span>
        `
        )}
      </div>
    </div>


    <div class="reviews">
        <h1 class="review-title">Review restoran</h1>
        <div class="review-container">${restaurant.customerReviews
          .map(
            (review) => `
            <div class="review-card">
              <i class="fa-regular fa-user"></i>
              <h3 class="review-name">${review.name}</h3>
              <p class="review-date">${review.date}</p>
              <p class="review-comment">"${review.review}"</p>
            </div>`
          )
          .join('')}
        </div>
    </div>

  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
<article class="resto-card" alt="Menu untuk melihat restoran">
  <a class="card-tag" href="/#/detail/${restaurant.id}">
    <img
      class="resto-card__thumbnail"
      src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"
      alt="${restaurant.name}"
      title="${restaurant.name}"
    />
    <div class="resto-card__content">
      <p class="resto-card__city">${restaurant.city}</p>
      <p class="resto-card__date">
        <i class="fa-sharp fa-solid fa-star"></i>${restaurant.rating}</strong>
      </p>
      <h1 class="resto-card__title">${restaurant.name}</h1>
      <p class="resto-card__description">${restaurant.description}</p>
    </div>
  </a>
</article>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

const createFormReviewTemplate = () => `
  <form class="form-container">
    <div class="form-nama"> 
        <label for="nama">Nama</label>
        <input class="Nama" type="text" name="nama" placeholder="Masukan nama">
    </div>
    <div class="form-review">
        <label for="review">Review</label>
        <textarea class="textReview"name="review" placeholder="Masukan review"></textarea>
    </div>
    <button type="submit" class="form-submit">Kirim</button>
  </form>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createFormReviewTemplate,
};
