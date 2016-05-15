(function() {
  'use strict';

  angular
    .module('museek')
    .component('recentTracks', {
      templateUrl: 'app/components/listbox/recent-tracks.html',
      controller: RecentTracks
    });

  /** @ngInject */
  function RecentTracks($scope, $http, $log, config, placeholder, apiMethods) {
    var ctrl = this;
    ctrl.placeholder = placeholder.TRACK;
    ctrl.letterLimit = 30;

    $scope.$on('onUserSearch', function(event, evtParam) {
      if(evtParam) {
        onUserChange(evtParam);

        if(evtParam.totalPlaycount) {
          ctrl.totalPlaycount = evtParam.totalPlaycount;
        }
      }
    });

    function onUserChange(evtParam) {
      var parameters =
        angular.element.param({
          method  : apiMethods.GET_USER_RECENT_TRACKS,
          api_key : config.API_KEY,
          format  : config.FORMAT,
          user    : evtParam.user,
          limit   : evtParam.limit
        });

      var requestTopArtists = {
        method: 'GET',
        url: config.URL + parameters,
        headers: { },
        data: { }
      }

      $http(requestTopArtists).then(function successCallback(response) {
          ctrl.recentTracks = response.data['recenttracks']['track'];
        },
        function errorCallback(response) {
          $log.error({ type: response.status, msg: response.data });
      });
    }
  }
})();
