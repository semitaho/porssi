import angularMaterialize from 'angular-materialize';
import NavigationComponent from './navigation/navigation.component.js';
let app = angular.module('porssiapp', [angularMaterialize])
  .component('navigation', NavigationComponent)
  .controller('mainController', function () {
    this.paska = 'paska';
  });
console.log('kaaekkonen');
