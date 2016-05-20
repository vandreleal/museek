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
    function HeaderController($scope, $timeout, $http, $log, config, placeholder, API) {
      var headerVm = this;

      headerVm.logo = "assets/images/logo.png";
      headerVm.headline = "Last.fm User Statistics";

      headerVm.user = config.USER;
      headerVm.period = config.PERIOD;
      headerVm.limit = config.LIMIT;

      headerVm.periods = [{
        label: "Overall",
        parameter: "overall"
      }, {
        label: "Last Week",
        parameter: "7day"
      }, {
        label: "Last Month",
        parameter: "1month"
      }, {
        label: "Last 6 Months",
        parameter: "6month"
      }, {
        label: "Last Year",
        parameter: "12month"
      }];


      function getUserData(userInfo) {

        if (userInfo.error) {
          headerVm.isLoading = false;
        }
        else {
          var userTotalPlaycount = userInfo.user.playcount;

          if (!headerVm.limit) {
            headerVm.limit = config.LIMIT;
          }

          API.getUserTopAlbums(headerVm.user, headerVm.limit, headerVm.period)
            .then(function(userTopAlbums) {
              $scope.$broadcast('onGetUserTopAlbums', {
                userTopAlbums: userTopAlbums,
                userTotalPlaycount: userTotalPlaycount
              });
            });

          API.getUserTopArtists(headerVm.user, headerVm.limit, headerVm.period)
            .then(function(userTopArtists) {
              $scope.$broadcast('onGetUserTopArtists', {
                userTopArtists: userTopArtists,
                userTotalPlaycount: userTotalPlaycount
              });
            });

          API.getUserTopTracks(headerVm.user, headerVm.limit, headerVm.period)
            .then(function(userTopTracks) {
              $scope.$broadcast('onGetUserTopTracks', {
                userTopTracks: userTopTracks,
                userTotalPlaycount: userTotalPlaycount
              });
            });

          API.getUserRecentTracks(headerVm.user, headerVm.limit, 1)
            .then(function(userRecentTracks) {
              $scope.$broadcast('onGetUserRecentTracks', {
                userRecentTracks: userRecentTracks,
                userTotalPlaycount: userTotalPlaycount
              });

              headerVm.isLoading = false;
            });
        }

        $scope.$broadcast('onGetUserInfo', {
          data: userInfo,
          user: headerVm.user
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
