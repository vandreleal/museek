(function() {
  'use strict';

  angular
    .module('museek')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $timeout, $http, $log, config, apiMethods) {
    var vm = this;

    vm.user   = config.USER;
    vm.period = config.PERIOD;
    vm.limit  = config.LIMIT;

    vm.periods = ["overall","7day","1month","6month","12month"];

    function getUserInfo() {
      var parameters =
        angular.element.param({
          method  : apiMethods.GET_USER_INFO,
          user    : vm.user,
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
          vm.userInfo = response.data;
          vm.totalPlaycount = response.data.user.playcount;
        },
        function errorCallback(response) {
          $log.error({ type: response.status, msg: response.data });
      });
    }

    vm.setUser = function() {
      getUserInfo();

      $scope.$broadcast('onRetrieve', {
        user: vm.user,
        period: vm.period,
        limit: vm.limit,
        totalPlaycount: 12055
      });
    }
  }
})();
