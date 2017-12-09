import carousel from './modules/carousel';
import form from './modules/form';

carousel().then(import('./modules/banner').then(banner => banner()));

form().then(import('./modules/scroll').then(banner => scroll()));
