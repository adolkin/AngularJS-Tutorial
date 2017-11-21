// SERVICES
weatherApp.service('cityService', function () {
  this.city = "New York"
});

weatherApp.service('weatherService', ['$resource', function ($resource) {

  this.GetWeather = function (city, days) {
    var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast?APPID=22a06018ceec012c7883c1cad81833b0",
      { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" } });

    return weatherResult = weatherAPI.get({ q: city, cnt: days });
  }
}]);