// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$filter', '$timeout', function ($scope, $filter, $timeout) {

  $scope.handle = '';

  $scope.characters = 5;
  $scope.lowercasehandle = function () {
    return $filter('lowercase')($scope.handle);
  }

  $scope.rules = [
    { rulename: "Must be 5 characters" },
    { rulename: "Must not be used elsewhere" },
    { rulename: "Must be cool" }
  ]
}]);