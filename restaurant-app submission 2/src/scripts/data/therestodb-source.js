import API_ENDPOINT from '../global/api-endpoint';
import CONFIG from '../global/config';

class TheRestoDbSource {
  static async getRestoList() {
    const response = await fetch(API_ENDPOINT.LIST_RESTO);
    return response.json();
  }

  static async getRestoDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL_RESTO(id));
    return response.json();
  }

  static async postRestoReview(data) {
    const response = await fetch(API_ENDPOINT.REVIEW_RESTO, {
      method: 'POST',
      headers: {
        'X-Auth-Token': CONFIG.KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return response.json();
  }
}

export default TheRestoDbSource;
