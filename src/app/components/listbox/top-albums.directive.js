(function() {
  'use strict';

  angular
    .module('museek')
    .component('topAlbums', {
      templateUrl: 'app/components/listbox/top-albums.html',
      controller: TopAlbumsController
    });

  /** @ngInject */
  function TopAlbumsController($scope, $http, $log, apiPlaceholders) {
    var ctrl = this;

    $scope.$on('onGetUserTopAlbums', function(event, userData) {
      if (userData) {
        ctrl.userTopAlbums = userData.userTopAlbums['topalbums']['album'];
        ctrl.userPlaycount = userData.userPlaycount;

        ctrl.placeholderAlbum = apiPlaceholders.ALBUM;
      }
    });
  }
})();
