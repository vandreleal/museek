(function() {
  'use strict';

  angular
    .module('museek')
    .directive('coreHeader', coreHeader);

  /** @ngInject */
  function coreHeader() {
    var directive = {
      restrict: 'EA',
      templateUrl: 'app/components/header/header.html',
      controller: HeaderController,
      controllerAs: 'headerVm'
    };

    return directive;

    /** @ngInject */
    function HeaderController($scope, $http, $log, apiConfig, API) {
      var headerVm = this;

      headerVm.logo = "assets/images/logo.png";
      headerVm.headline = "Last.fm User Statistics";

      headerVm.user = apiConfig.USER;
      headerVm.period = apiConfig.PERIOD;
      headerVm.periods = apiConfig.PERIODS;
      headerVm.limit = apiConfig.LIMIT;


      function getUserData(userInfo) {

        if (userInfo.error) {
          headerVm.isLoading = false;
        }
        else {
          var userPlaycount = userInfo.user.playcount;

          $scope.$broadcast('onGetUserPlaycount', {
            userPlaycount: userPlaycount
          });

          if (!headerVm.limit) {
            headerVm.limit = apiConfig.LIMIT;
          }

          API.getUserTopAlbums(headerVm.user, headerVm.limit, headerVm.period)
            .then(function(userTopAlbums) {
              $scope.$broadcast('onGetUserTopAlbums', {
                userTopAlbums: userTopAlbums,
                userPlaycount: userPlaycount
              });
            });

          API.getUserTopArtists(headerVm.user, headerVm.limit, headerVm.period)
            .then(function(userTopArtists) {
              $scope.$broadcast('onGetUserTopArtists', {
                userTopArtists: userTopArtists,
                userPlaycount: userPlaycount
              });
            });

          API.getUserTopTracks(headerVm.user, headerVm.limit, headerVm.period)
            .then(function(userTopTracks) {
              $scope.$broadcast('onGetUserTopTracks', {
                userTopTracks: userTopTracks,
                userPlaycount: userPlaycount
              });
            });

          API.getUserRecentTracks(headerVm.user, headerVm.limit, 1)
            .then(function(userRecentTracks) {
              $scope.$broadcast('onGetUserRecentTracks', {
                userRecentTracks: userRecentTracks,
                userPlaycount: userPlaycount
              });
              headerVm.isLoading = false;
            });
        }

        $scope.$broadcast('onGetUserInfo', {
          data: userInfo,
          user: headerVm.user,
          period: headerVm.period
        });
      }

      headerVm.searchUser = function() {
        headerVm.isLoading = true;

        API.getUserInfo(headerVm.user)
          .then(function(userInfo) {
            getUserData(userInfo);
          });
      }

    }
  }

})();
