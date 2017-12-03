'use strict';

/**
 * @ngdoc overview
 * @name yeomanTutorialApp
 * @description
 * # yeomanTutorialApp
 *
 * Main module of the application.
 */
angular
  .module('yeomanTutorialApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
