(function() {
  'use strict';

  angular
    .module('museek')
    .component('topAlbums', {
      templateUrl: 'app/components/listbox/top-albums.html',
      controller: TopAlbumsController
    });

  /** @ngInject */
  function TopAlbumsController($scope, $http, $log, config, apiMethods) {
    var ctrl = this;

    $scope.$on('onRetrieve', function(event, evtParam) {
      if(evtParam) {
        onUserChange(evtParam);
      }
    });

    function onUserChange(evtParam) {
      var parameters =
        $.param({
          method  : apiMethods.GET_USER_TOP_ALBUMS,
          api_key : config.API_KEY,
          format  : config.FORMAT,
          user    : evtParam.user,
          period  : evtParam.period,
          limit   : evtParam.limit
        });

      $log.debug("top-albums-> " + parameters);

      var requestTopAlbums = {
        method: 'GET',
        url: config.URL + parameters,
        headers: { },
        data: { }
      }

      $http(requestTopAlbums).then(function successCallback(response) {
          ctrl.albums = response.data['topalbums']['album'];
          $log.debug(ctrl.albums);
        },
        function errorCallback(response) {
          $log.error({ type: response.status, msg: response.data });
      });
    }
  }
})();
