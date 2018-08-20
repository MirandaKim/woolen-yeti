const $ = require('jquery');

alert('script attached!!!!');

$('.menu-icon').on('click', () => {
  $('body').addClass('menu-visible');
});
