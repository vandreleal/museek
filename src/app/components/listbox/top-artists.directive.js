(function() {
  'use strict';

  angular
    .module('museek')
    .component('topArtists', {
      templateUrl: 'app/components/listbox/top-artists.html',
      controller: TopArtistsController
    });

  /** @ngInject */
  function TopArtistsController($scope, $http, $log, config, placeholder, API) {
    var ctrl = this;

    $scope.$on('onGetUserTopArtists', function(event, userData) {
      if (userData) {
        ctrl.userTopArtists = userData.userTopArtists['topartists']['artist'];
        ctrl.userTotalPlaycount = userData.userTotalPlaycount;

        ctrl.placeholderArtist = placeholder.ARTIST;
      }
    });
  }
})();
