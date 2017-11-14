// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', function ($scope) {
    
}]);

var searchPeople = function searchPeople(firstName, lastName, height, age, occupation) {
  return 'Jane Doe';
}

console.log(angular.injector().annotate(searchPeople));

