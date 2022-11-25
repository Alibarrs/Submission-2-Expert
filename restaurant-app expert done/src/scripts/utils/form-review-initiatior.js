/* eslint-disable no-alert */
import TheRestoDbSource from '../data/therestodb-source';
import { createFormReviewTemplate } from '../views/templates/template-creator';

const FormReviewInitiator = {
  async init({ formReviewContainer, id }) {
    this._formReviewContainer = formReviewContainer;
    this._id = id;

    await this._renderForm();
  },

  async _renderForm() {
    this._formReviewContainer.innerHTML = createFormReviewTemplate();

    const formSubmit = document.querySelector('.form-submit');

    formSubmit.addEventListener('click', async (event) => {
      event.preventDefault();

      const textName = document.querySelector('.txtNama');
      const textReview = document.querySelector('.txtReview');
      const form = document.querySelector('form');

      const reviewData = {
        id: this._id,
        name: textName.value,
        review: textReview.value,
      };

      if (textName.value === '') {
        alert('Nama kosong, silahkan isi');
      } else if (textReview.value === '') {
        alert('Review kosong silahkan isi');
      } else {
        await TheRestoDbSource.postRestoReview(reviewData);
        form.reset();
        alert('Review berhasil ditambahkan!');
        this._renderReview(reviewData.name, reviewData.review);
      }
    });
  },

  _renderReview(name, review) {
    const reviewContainer = document.querySelector('.review-container');
    const date = new Date().toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    const dataReview = `
      <div class="review-card">
        <i class="far fa-user fa-2x"></i>
        <h3 class="review-name">${name}</h3>
        <p class="review-date">${date}</p>
        <p class="review-comment">"${review}"</p>
      </div>
    `;

    reviewContainer.innerHTML += dataReview;
  },
};

export default FormReviewInitiator;
