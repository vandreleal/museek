(function() {
  'use strict';

  angular
    .module('museek')
    .component('topTracks', {
      templateUrl: 'app/components/listbox/top-tracks.html',
      controller: TopTracksController
    });

  /** @ngInject */
  function TopTracksController($scope, $http, $log, config, apiMethods) {
    var ctrl = this;

    $scope.$on('onRetrieve', function(event, evtParam) {
      if(evtParam) {
        onUserChange(evtParam);
      }
    });

    function onUserChange(evtParam) {
      var parameters =
        angular.element.param({
          method  : apiMethods.GET_USER_TOP_TRACKS,
          api_key : config.API_KEY,
          format  : config.FORMAT,
          user    : evtParam.user,
          period  : evtParam.period,
          limit   : evtParam.limit
        });

      $log.debug("top-tracks-> " + parameters);

      var requestTopTracks = {
        method: 'GET',
        url: config.URL + parameters,
        headers: { },
        data: { }
      }

      $http(requestTopTracks).then(function successCallback(response) {
          ctrl.tracks = response.data['toptracks']['track'];
          $log.debug(ctrl.tracks);
        },
        function errorCallback(response) {
          $log.error({ type: response.status, msg: response.data });
      });
    }
  }
})();
