(function() {
  'use strict';

  angular
    .module('museek')
    .component('recentTracks', {
      templateUrl: 'app/components/listbox/recent-tracks.html',
      controller: RecentTracks
    });

  /** @ngInject */
  function RecentTracks($scope, $http, $log, config, placeholder, API) {
    var ctrl = this;

    $scope.$on('onGetUserRecentTracks', function(event, userData) {
      if (userData) {
        ctrl.userRecentTracks = userData.userRecentTracks['recenttracks']['track'];

        ctrl.placeholderNow = placeholder.NOW;
        ctrl.placeholderTrack = placeholder.TRACK;
      }
    });
  }
})();
