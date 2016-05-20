(function() {
  'use strict';

  angular
    .module('museek')
    .component('topTracks', {
      templateUrl: 'app/components/listbox/top-tracks.html',
      controller: TopTracksController
    });

  /** @ngInject */
  function TopTracksController($scope, $http, $log, config, placeholder) {
    var ctrl = this;

    $scope.$on('onGetUserTopTracks', function(event, userData) {
      if (userData) {
        ctrl.userTopTracks = userData.userTopTracks['toptracks']['track'];
        ctrl.userTotalPlaycount = userData.userTotalPlaycount;

        ctrl.placeholderTrack = placeholder.TRACK;
      }
    });
  }
})();
