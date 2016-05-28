import HomeComponent from './home.component.js';
import CardComponent from './card/card.component.js';


const moduleName = 'porssi.home';
angular.module(moduleName, [])
  .component('home', HomeComponent)
  .component('card', CardComponent);

export default moduleName;
