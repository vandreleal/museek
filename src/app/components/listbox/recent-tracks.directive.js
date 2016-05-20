(function() {
  'use strict';

  angular
    .module('museek')
    .component('recentTracks', {
      templateUrl: 'app/components/listbox/recent-tracks.html',
      controller: RecentTracks
    });

  /** @ngInject */
  function RecentTracks($scope, $http, $log, apiPlaceholders) {
    var ctrl = this;

    $scope.$on('onGetUserRecentTracks', function(event, userData) {
      if (userData) {
        ctrl.userRecentTracks = userData.userRecentTracks['recenttracks']['track'];

        ctrl.placeholderNow = apiPlaceholders.NOW;
        ctrl.placeholderTrack = apiPlaceholders.TRACK;
      }
    });
  }
})();
