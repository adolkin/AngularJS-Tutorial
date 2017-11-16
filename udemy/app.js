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

  $scope.name = nameService.name;
  // $log.main = 'Property from main';
  // $log.log($log);

  $scope.$watch('name', function() {
    nameService.name = $scope.name;
  })

  $log.log(nameService.name);
  $log.log(nameService.namelength());

}]);

myApp.controller("firstController", ["$scope", "$log", "$routeParams","nameService", function ($scope, $log, $routeParams, nameService) {
  $scope.num = $routeParams.num;

  $scope.name = nameService.name;
  $scope.$watch('name', function() {
    nameService.name = $scope.name;
  })
}]);


