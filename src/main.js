import commonModule from './common.module.js';
import homeModule from './home/home.module.js';
import teamModule from './team/team.module.js';
import angularMaterialize from 'angular-materialize';
import routeConfig from './app.router.js';
import LajitFilter from './home/card/lajit.filter.js';
import FacebookModel from './facebook/facebook.model.js';
import UsersModel from './users.model.js';
import FacebookService from './facebook/facebook.service.js';
angular.module('porssiapp', ['ngRoute', require('angular-resource'), commonModule, homeModule, teamModule, angularMaterialize, require('angular-route')])
  .config(routeConfig)
  .service('facebookService', FacebookService)
  .service('facebookModel', FacebookModel)
  .service('usersModel', UsersModel)
  .filter('lajitFilter', LajitFilter);


window.fbAsyncInit = () => {
  FB.init({
    appId: '1171438759556506',
    xfbml: true,
    version: 'v2.6'
  });
  angular.bootstrap(document, ['porssiapp']);

};
