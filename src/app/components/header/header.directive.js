(function() {
  'use strict';

  angular
    .module('museek')
    .directive('coreHeader', coreHeader);

  /** @ngInject */
  function coreHeader() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/header/header.html',
      controller: HeaderController,
      controllerAs: 'headerVm'
    };

    return directive;

    /** @ngInject */
    function HeaderController($scope, $timeout, $http, $log, config, placeholder, apiMethods) {
      var headerVm = this;

      headerVm.logo = "/assets/images/logo.png";
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

      function getUserInfo() {
        var parameters =
          angular.element.param({
            method: apiMethods.GET_USER_INFO,
            user: headerVm.user,
            api_key: config.API_KEY,
            format: config.FORMAT
          });

        var request = {
          method: 'GET',
          url: config.URL + parameters,
          headers: {},
          data: {}
        }

        $http(request).then(function successCallback(response) {
            $scope.$broadcast('onSearch', {
              data: response.data
            });

            if (!response.data.error) {

              if (!headerVm.limit) {
                headerVm.limit = config.LIMIT;
              }

              $scope.$broadcast('onUserSearch', {
                user: headerVm.user,
                period: headerVm.period,
                limit: headerVm.limit,
                totalPlaycount: response.data.user.playcount
              });
            }
          },
          function errorCallback(response) {
            $log.error({
              type: response.status,
              msg: response.data
            });
          });
      }

      headerVm.searchUser = function() {
        getUserInfo();
        headerVm.isLoading = true;

        $timeout(function() {
          headerVm.isLoading = false;
        }, 1000);
      }

    }
  }

})();
