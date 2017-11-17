var myApp = angular.module("angularApp", ["ngRoute"]);
myApp.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "pages/main.html",
      controller: "mainController"
    })
    .when("/first", {
      templateUrl: "pages/first.html",
      controller: "firstController"
    })
    .when("/first/:num", {
    templateUrl: "pages/first.html",
    controller: "firstController"
  });
});

myApp.service("nameService", function() {
  var self = this;
  this.name="John Doe";

  this.namelength = function() {
    return self.name.length;
  }

})

myApp.controller("mainController", ["$scope", "$log", "nameService", function ($scope, $log, nameService) {

}]);

myApp.controller("firstController", ["$scope", "$log", "$routeParams","nameService", function ($scope, $log, $routeParams, nameService) {

}]);

myApp.directive("searchResult", function() {
  return {
    restrict: 'AECM',
    templateUrl: 'directives/searchresult.html',
    replace: true
  }
})
