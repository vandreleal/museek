(function() {
  'use strict';

  angular
    .module('museek')
    .component('topAlbums', {
      templateUrl: 'app/components/listbox/top-albums.html',
      controller: TopAlbumsController
    });

  /** @ngInject */
  function TopAlbumsController($scope, $http, $log, config, placeholder, apiMethods) {
    var ctrl = this;
    ctrl.albums = [];
    ctrl.placeholderAlbum = placeholder.ALBUM;

    $scope.$on('onUserSearch', function(event, evtParam) {
      if (evtParam) {
        onUserChange(evtParam);

        if (evtParam.totalPlaycount) {
          ctrl.totalPlaycount = evtParam.totalPlaycount;
        }
      }
    });

    function onUserChange(evtParam) {
      var parameters =
        angular.element.param({
          method: apiMethods.GET_USER_TOP_ALBUMS,
          api_key: config.API_KEY,
          format: config.FORMAT,
          user: evtParam.user,
          period: evtParam.period,
          limit: evtParam.limit
        });

      var requestTopAlbums = {
        method: 'GET',
        url: config.URL + parameters,
        headers: {},
        data: {}
      }

      $http(requestTopAlbums).then(function successCallback(response) {
          ctrl.albums = response.data['topalbums']['album'];
        },
        function errorCallback(response) {
          $log.error({
            type: response.status,
            msg: response.data
          });
        });
    }
  }
})();
