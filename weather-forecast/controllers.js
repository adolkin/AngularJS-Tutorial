// CONTROLERS
weatherApp.controller('homeController', ['$scope', 'cityService', function ($scope, cityService) {
  $scope.city = cityService.city;
  $scope.$watch('city', function () {
    cityService.city = $scope.city;
  })
}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function ($scope, $resource, $routeParams, cityService, ) {
  $scope.city = cityService.city;
  
  $scope.days = $routeParams.days || '2';

  $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast?APPID=22a06018ceec012c7883c1cad81833b0",
    { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" } });

  $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days });

  $scope.converToFahrenheit = function (degK) {
    return Math.round((1.8 * (degK - 273)) + 32);
  }

  $scope.convertToDate = function (dt) {
    return new Date(dt * 1000);
  }
}]);
