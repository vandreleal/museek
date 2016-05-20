(function() {
  'use strict';

  angular
    .module('museek')
    .component('topTracks', {
      templateUrl: 'app/components/listbox/top-tracks.html',
      controller: TopTracksController
    });

  /** @ngInject */
  function TopTracksController($scope, $http, $log, apiPlaceholders) {
    var ctrl = this;

    $scope.$on('onGetUserTopTracks', function(event, userData) {
      if (userData) {
        ctrl.userTopTracks = userData.userTopTracks['toptracks']['track'];
        ctrl.userPlaycount = userData.userPlaycount;

        ctrl.placeholderTrack = apiPlaceholders.TRACK;
      }
    });
  }
})();
