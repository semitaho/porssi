import angular from 'angular';
import 'angular-material/angular-material.css';
import angularMaterial from 'angular-material';

let app = angular.module('porssiapp', [angularMaterial]);


app.controller('mainController', function () {
  this.paska = 'paska';
});
console.log('kaaekkonen');
