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

      headerVm.user   = config.USER;
      headerVm.period = config.PERIOD;
      headerVm.limit  = config.LIMIT;

      headerVm.placeholder = placeholder.USER;
      headerVm.periods = ["overall","7day","1month","6month","12month"];

      function getUserInfo() {
        var parameters =
          angular.element.param({
            method  : apiMethods.GET_USER_INFO,
            user    : headerVm.user,
            api_key : config.API_KEY,
            format  : config.FORMAT
          });

        var request = {
          method: 'GET',
          url: config.URL + parameters,
          headers: { },
          data: { }
        }

        $http(request).then(function successCallback(response) {

            if(!response.data.error) {
              $scope.$broadcast('onUserSearch', {
                obj: response.data,
                user: headerVm.user,
                period: headerVm.period,
                limit: headerVm.limit,
                totalPlaycount: response.data.user.playcount
              });
            }
            else {
              headerVm.error = response.data.error;
              headerVm.message = response.data.message;
            }
          },
          function errorCallback(response) {
            $log.error({ type: response.status, msg: response.data });
        });
      }

      headerVm.setUser = function() {
        getUserInfo();
      }
    }
  }

})();
