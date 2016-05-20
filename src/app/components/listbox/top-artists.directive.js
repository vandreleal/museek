(function() {
  'use strict';

  angular
    .module('museek')
    .component('topArtists', {
      templateUrl: 'app/components/listbox/top-artists.html',
      controller: TopArtistsController
    });

  /** @ngInject */
  function TopArtistsController($scope, $http, $log, config, placeholder) {
    var ctrl = this;

    $scope.$on('onGetUserTopArtists', function(event, userData) {
      if (userData) {
        ctrl.userTopArtists = userData.userTopArtists['topartists']['artist'];
        ctrl.userPlaycount = userData.userPlaycount;

        ctrl.placeholderArtist = placeholder.ARTIST;
      }
    });
  }
})();
