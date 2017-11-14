// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope','$log','$filter', function ($scope, $log, $filter) {
    // $log.log("Hello Log");
    // $log.info("info");
    // $log.warn("warn");
    // $log.debug("debug");
    // $log.error("error");

    $scope.name = 'Jonh';
    $scope.formattedname = $filter('uppercase')($scope.name);

    $log.info($scope.name);
    $log.info($scope.formattedname);
}]);