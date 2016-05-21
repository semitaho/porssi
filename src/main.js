import angularMaterialize from 'angular-materialize';
import routeConfig from './app.router.js';
import NavigationComponent from './navigation/navigation.component.js';
import HomeComponent from './home/home.component.js';
import FooterComponent from './footer/footer.component.js';
import FacebookModel from './facebook/facebook.model.js';

import FacebookService from './facebook/facebook.service.js';
angular.module('porssiapp', ['ngRoute', angularMaterialize, require('angular-route')])
  .config(routeConfig)
  .component('navigation', NavigationComponent)
  .component('home', HomeComponent)
  .component('porssiFooter', FooterComponent)
  .service('facebookService', FacebookService)
  .service('facebookModel', FacebookModel);


window.fbAsyncInit = () => {
  FB.init({
    appId: '1171438759556506',
    xfbml: true,
    version: 'v2.6'
  });
  angular.bootstrap(document, ['porssiapp']);

};