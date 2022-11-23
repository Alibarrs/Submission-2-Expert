/* eslint-disable no-prototype-builtins */
/* eslint-disable consistent-return */
/* eslint-disable no-undef */
/* eslint-disable no-return-assign */
import { itActsAsFavoriteRestoModel } from './contracts/favResto_contracts';

let favRestos = [];

const FavoriteRestaurantArray = {
  getResto(id) {
    if (!id) {
      return;
    }

    return favRestos.find((resto) => resto.id === id);
  },

  getAllRestos() {
    return favRestos;
  },

  putResto(resto) {
    if (!resto.hasOwnProperty('id')) {
      return;
    }

    if (this.getResto(resto.id)) {
      return;
    }

    favRestos.push(resto);
  },

  deleteResto(id) {
    favRestos = favRestos.filter((resto) => resto.id !== id);
  },
};

describe('Favorite Restaurant Array Contract Test Implementation', () => {
  afterEach(() => (favRestos = []));

  itActsAsFavoriteRestoModel(FavoriteRestaurantArray);
});
