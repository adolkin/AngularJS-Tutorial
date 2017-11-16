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

myApp.controller("mainController", ["$scope", "$log", function ($scope, $log) {
  $scope.name = 'Main';
  $log.main = 'Property from main';
  $log.log($log);
}]);

myApp.controller("firstController", ["$scope", "$log", "$routeParams", function ($scope, $log, $routeParams) {
  $scope.name = 'First';
  $scope.num = $routeParams.num;
  $log.main = 'Property from first';
  $log.log($log);
}]);


