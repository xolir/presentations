import carousel from './modules/carousel';
import form from './modules/form';
import scroll from './modules/scroll';
import banner from './modules/banner';

carousel().then(() => banner());

form().then(() => scroll());