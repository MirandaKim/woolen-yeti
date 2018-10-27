require('./vendors');
import $ from 'jquery';
import CheckHasTouch from './modules/CheckHasTouch.class';
import NavDisplay from './modules/NavDisplay.class';
import StickyOnScroll from './modules/StickyOnScroll.class';
import Utils from './modules/Utils.class';
import UserMessage from './modules/UserMessage.class';
import RevealOnScroll from './modules/RevealOnScroll.class';
import FixLazyWaypoints from './modules/FixLazyWaypoints.class';

/****************************************************/
/*                                                 */
/*   App.js                                       */
/*                                               */
/************************************************/
/*

  - Root for all scripts
  - Available features include:
      + Detect touch event on device
      + Toggle display of menu (using class names)
      + Sticky On Scroll for creating "sticky" elements like banners/headers/menus (using class names)


  *************
  * Contents: *
  *************

  # Has No JS
  # Common Vars
  # Detect Touch
  # Navigation Display
  # Sticky Header
  # Reveal On Scroll
  # Copyright
  # Email Sign-Up Toggle Display
  # User Messages
  # Fix Lazy Waypoints

*/

/**************************************/
/*   # Has No JS                     */
/************************************/

/*
  Swap JS Indicator Class
  Since we've reached this point, the device must have JS
  so we will swap the has-no-js class for a has-js class.
  This call may be used is CSS to style accordingly.
  (Remember: If an element's display is controlled by js,
  a device may not be able to reach that element if js is
  not enabled.)
*/
document.body.classList.remove('has-no-js');
document.body.classList.add('has-js');

/**************************************/
/*   # Common Vars                   */
/************************************/

let mainNav_block = 'site-header__menu-wrapper';
let mainNav_selector = `.${mainNav_block}`;
let urlParams = Utils.getUrlParameters();

/**************************************/
/*   # Detect Touch                  */
/************************************/

/*Watch for touch event on device.
When touch event is fired, a has-touch class will replace a has-no-touch class.*/
let checkHasTouch = new CheckHasTouch();
checkHasTouch.detect(); // the watch event is unbound once a touch event is fired.

/**************************************/
/*   # Navigation Display            */
/************************************/

/*
  Create user events to toggle the display of the menu navigation.
  The display is based on class names--thus is dependent on CSS
  for any change in position, visibility, or animations.
*/
let body_visibleMenuClassStr = 'menu-visible';
let mainNav_visibleClassStr = `${mainNav_block}--visible`;
let mainNav_toggleSelectors = [`.main-nav-toggle`];
let mainNav_closeSelectors = [`${mainNav_selector}__links`, '.site-body', '.site-footer'];
let mainNav_openSelectors = [];

let navDisplay = new NavDisplay(mainNav_selector, mainNav_visibleClassStr, body_visibleMenuClassStr);
navDisplay.setEvents({ // See NavDisplay.class.js for config options.
  toggleSelectors: mainNav_toggleSelectors, // selectors for click to toggle event
  closeSelectors: mainNav_closeSelectors, // selectors for click to close event
  openSelectors: mainNav_openSelectors // selectors for click to open event
});

/**************************************/
/*   # Sticky Header                 */
/************************************/
/*
Give header class a sticky class (.sticky) when document is scrolled away from the top of the screen.
For this to funtion, make sure the header (or any element to be sticky) is given the class 'make-sticky',
and a single trigger element (near the top of the screen) is given the class (trigger-sticky)
for triggering the class change event.
*/
let stickyOnScroll = new StickyOnScroll();
stickyOnScroll.execute();

/**************************************/
/*   # Reveal On Scroll              */
/************************************/
/*
Add the class 'reveal-on-scroll' to an element to reveal when the element is scrolled to.
The JS only triggers a class name change and doesn't handle the actual animation (this requires css transitions).
See reveal-on-scroll.scss for css transitions (~/src/styles/modules/_reveal-on-scroll.scss)
*/
let revealOnScroll = new RevealOnScroll();
revealOnScroll.execute();

/**************************************/
/*   # Email Sign-Up Toggle Display  */
/************************************/

let emailSignUpSelector = '.email-signup--hidden-initially';
let emailSignUpToggleSelector = '.email-signup__toggle';
let emailSignUpDisplayClass = 'email-signup--visible';
Utils.toggleClassForOtherOnClick(emailSignUpToggleSelector, emailSignUpSelector, emailSignUpDisplayClass);

/**************************************/
/*   # User Messages                 */
/************************************/
/*Post a user message near the top of the screen. These messages are based on url parameters.*/
let userMessage = new UserMessage();
let messageSent = 'msgSent=true'; // value for triggering the message after a contact form has been submitted.

if($.inArray(messageSent, urlParams) > -1){
  userMessage.postMessage('Thanks for the message!', 'Your message has been sent, and I\'ll contact you via email as soon as I can.', 'user-message--neutral');
}

/**************************************/
/*   # Fix Lazy Waypoints            */
/************************************/
/*
Refresh waypoints when a lazy image is loaded in to allow accurate waypoint positions.
*/
let fixLazyWay = new FixLazyWaypoints();
fixLazyWay.execute();
