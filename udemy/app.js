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
    template: `
      <a href="#" class="list-group-item">
        <h4 class="list-group-item-heading">Doe, John</h4>
        <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus.</p>
      </a>
      `,
    replace: true
  }
})
