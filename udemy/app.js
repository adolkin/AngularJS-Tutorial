var myApp = angular.module("angularApp", ["ngRoute"]);
myApp.config(function($routeProvider){
    $routeProvider
       .when("/", {
        templateUrl: "pages/main.html",
        controller: "mainController"
    })
    .when("/first", {
        templateUrl:"pages/first.html",
        controller: "firstController"
    });
});

myApp.controller("mainController", ["$scope","$log", function($scope, $log){
  $scope.name = 'Main';
}]);

myApp.controller("firstController", ["$scope","$log", function($scope, $log){
    $scope.name = 'First';
}]);


