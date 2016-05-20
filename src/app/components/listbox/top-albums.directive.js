(function() {
  'use strict';

  angular
    .module('museek')
    .component('topAlbums', {
      templateUrl: 'app/components/listbox/top-albums.html',
      controller: TopAlbumsController
    });

  /** @ngInject */
  function TopAlbumsController($scope, $http, $log, config, placeholder) {
    var ctrl = this;

    $scope.$on('onGetUserTopAlbums', function(event, userData) {
      if (userData) {
        ctrl.userTopAlbums = userData.userTopAlbums['topalbums']['album'];
        ctrl.userTotalPlaycount = userData.userTotalPlaycount;

        ctrl.placeholderAlbum = placeholder.ALBUM;
      }
    });
  }
})();
