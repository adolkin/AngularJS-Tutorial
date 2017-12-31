(function () {
  'use strict';
  var requestParms = {
    clientId: "DO5JJHGXBODWHZUZ2W45T0S35PKJH3MCLC1SKF5U4X3VF4YA",
    clientSecret: "GF0PDCNGEKSU2GI4ANGBGBKTEUU0G3E3QYPO5YWFXRV33GY5",
    version: "20131230"
  }

  app.factory('placeExplorerService', function ($resource) {

    return $resource(requestUri,
      {
        action: 'explorer',
        client_id: requestParms.clientId,
        client_secret: requestParms.clientSecret,
        v: requestParms.version,
        venuePhotos: '1',
        callback: 'JSON_CALLBACK'
      },
      {
        get: { method: 'JSONP' }
      });
  });
})()