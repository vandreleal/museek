(function() {
  'use strict';

  angular
    .module('museek')
    .component('topArtists', {
      templateUrl: 'app/components/listbox/top-artists.html',
      controller: TopArtistsController
    });

  /** @ngInject */
  function TopArtistsController($scope, $http, $log, config, apiMethods) {
    var ctrl = this;

    $scope.$on('onRetrieve', function(event, evtParam) {
      if(evtParam) {
        onUserChange(evtParam);
      }
    });

    function onUserChange(evtParam) {
      var parameters =
        $.param({
          method  : apiMethods.GET_USER_TOP_ARTISTS,
          api_key : config.API_KEY,
          format  : config.FORMAT,
          user    : evtParam.user,
          period  : evtParam.period,
          limit   : evtParam.limit
        });

      $log.debug("top-artists-> " + parameters);

      var requestTopArtists = {
        method: 'GET',
        url: config.URL + parameters,
        headers: { },
        data: { }
      }

      $http(requestTopArtists).then(function successCallback(response) {
          ctrl.artists = response.data['topartists']['artist'];
          $log.debug(ctrl.artists);
        },
        function errorCallback(response) {
          $log.error({ type: response.status, msg: response.data });
      });
    }
  }
})();
