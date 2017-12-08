(function(){
  'use strict';

  angular
    .module('FoursquareApp', ['ngRoute', 'ngResource', 'ui.bootstrap'])
    .config(function ($routePRovider) {

      $routeProvider.when("/explore", {
        controller: "placesExplorerController",
        templateUrl: "app/views/placeresults.html"
      });

      $routeProvider.otherwise({ redirectTo: "/explore"});
    })
})()