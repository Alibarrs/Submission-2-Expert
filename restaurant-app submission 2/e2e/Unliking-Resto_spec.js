/* eslint-disable no-undef */
const assert = require('assert');

Feature('Unlliking Resto');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('unliking one resto', async ({ I }) => {
  I.see(EmptyResto, 'favorite-bar');

  I.amOnPage('/');
  I.seeElement('.card-tag');
});
