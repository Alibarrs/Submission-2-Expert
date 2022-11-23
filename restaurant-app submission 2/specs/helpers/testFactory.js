/* eslint-disable import/prefer-default-export */
import LikeButton from '../../src/scripts/utils/like-button-initiator';
import FavoriteRestoIdb from '../../src/scripts/data/favorite-resto-idb';

const createLikeButtonPresenterWithResto = async (restaurant) => {
  await LikeButton.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favResto: FavoriteRestoIdb,
    restaurant,
  });
};

export { createLikeButtonPresenterWithResto };
