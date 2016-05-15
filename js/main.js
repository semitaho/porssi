import angular from 'angular';
import angularMaterialize from 'angular-materialize';

let app = angular.module('porssiapp', [angularMaterialize]);

app.controller('mainController', function () {
  this.paska = 'kuu';
});
