/* banner.js */
export default () => new Promise(resolve => {
  initalize($carousel);
  console.log("Carousel initalized!");
  resolve();
});

/* AppEntry.js */

import $ from 'jquery';
import banner from "./modules/banner";
import carousel from "./modules/carousel";
import form from "./modules/form";
import scroll from "./modules/scroll";

carousel().then(() => banner());

scroll().then(() => form());

