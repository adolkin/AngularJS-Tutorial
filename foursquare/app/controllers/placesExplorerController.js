(function (){
  'use strict';
  var app = angular.module('FoursquareApp');
  app.controller('placesExplorerController', function ($scope, placesExplorerService, $filter) {
    $scope.exploreNearby = "New York";
    $scope.exploreQuery = "";
    $scope.filterValue = "";

    $scope.paces = [];
    $scope.filteredPlaces = [];
    $scope.filteredPlacesCount = 0;

    $scope.totalRecordsCount = 0;
    $scope.pageSize = 10;
    $scope.currentPage = 1;

    init();

    function init() {
      createWatch();
      getPlaces();
    }

    function getPlaces() {
      var offset = ($scope.pageSize) * ($scope.currentPage - 1);
      
      placesExplorerService.get({ near: $scope.ex})
    }
  })
})()