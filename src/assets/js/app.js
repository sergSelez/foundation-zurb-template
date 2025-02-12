import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global variable. In ES6, all imports are hoisted
// to the top of the file so if we used `import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';
import './lib/slick'
import './lib/scroll'

$('.management-slider').slick({
   infinite: true,
   slidesToShow: 1,
   slidesToScroll: 1,
   mobileFirst: true,
   prevArrow: $('.management-prev'),
   nextArrow: $('.management-next'),
   responsive: [
      {
         breakpoint: 500,
         settings: {
            slidesToShow: 2,
         }
      },
      {
         breakpoint: 800,
         settings: {
            slidesToShow: 3,
         }
      },
      {
         breakpoint: 1024,
         settings: {
            slidesToShow: 4,
         }
      }
   ]
});

$('.massmedia-slider').slick({
   infinite: true,
   slidesToShow: 1,
   slidesToScroll: 1,
   mobileFirst: true,
   prevArrow: $('.massmedia-prev'),
   nextArrow: $('.massmedia-next'),
   responsive: [
      {
         breakpoint: 1024,
         settings: {
            slidesToShow: 3,
         }
      }
   ]
})

$(document).foundation();
