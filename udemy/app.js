// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$filter', '$timeout', function ($scope, $filter, $timeout) {

  $scope.handle = '';

  $scope.lowercasehandle = function () {
    return $filter('lowercase')($scope.handle);
  }

  $scope.$watch('handle', function (newValue, oldValue) {
    console.info('Changed!');
    console.log('Old:' + oldValue);
    console.log('New:' + newValue)

  })

  // setTimeout(function() {
  //   $scope.$apply(function() {
  //     $scope.handle = 'newtwitterhandle';
  //     console.log('Scope changed')
  //   });
  // }, 3000)

  $timeout(function () {
    $scope.handle = 'newtwitterhandle';
    console.log('Scope changed')
  }, 3000)
}]);