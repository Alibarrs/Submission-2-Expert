/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Resto');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const EmptyResto = 'Info! Anda belum menambahkan restoran favorite!';

Scenario('showing empty favorited restaurant', ({ I }) => {
  I.seeElement('#posting');
  I.see(EmptyResto, 'favorite-bar');
});

Scenario('Liking one resto', async ({ I }) => {
  I.see(EmptyResto, 'favorite-bar');

  I.amOnPage('/');
  I.seeElement('.card-tag');

  const firstResto = locate('.resto-card__title').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card-tag');

  const likeRestoTitle = await I.grabTextFrom('.resto-card__title');
  assert.strictEqual(firstRestoTitle, likeRestoTitle);
});

Scenario('unliking one resto', async ({ I }) => {
  I.see(EmptyResto, 'favorite-bar');

  I.amOnPage('/');
  I.seeElement('.card-tag');

  const firstResto = locate('.resto-card__title').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card-tag');

  const likeRestoTitle = await I.grabTextFrom('.resto-card__title');
  assert.strictEqual(firstRestoTitle, likeRestoTitle);

  const favResto = locate('.resto-card__title').first();
  const favRestoTitle = await I.grabTextFrom(favResto);
  I.click(favResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('favorite-bar');
  I.dontSee(favRestoTitle);
});
