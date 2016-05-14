(function() {
  'use strict';

  angular
    .module('museek')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $timeout, $http, $log) {
    var vm = this;

    $scope.method   = "user.gettopartists";
    $scope.user     = "vandrelc";
    $scope.api_key  = "5d78615f919a188a79598df5687242f4";
    $scope.format   = "json";
    $scope.period   = "overall"
    $scope.limit    = "10";

    $scope.$on('onMethodChange', function(event, message) {
      if(message) {
        $scope.method = message.method;
        onChange();
      }
    });

    // activate();

    function onChange() {
      var parameters =
        $.param({
          method  : $scope.method,
          user    : $scope.user,
          api_key : $scope.api_key,
          period  : $scope.period,
          limit   : $scope.limit,
          format  : $scope.format
        });

      $log.debug(parameters);

      var requestTop = {
        method: 'GET',
        url: "http://ws.audioscrobbler.com/2.0/?" + parameters,
        headers: { },
        data: { }
      }

      $http(requestTop).then(function successCallback(response) {
          vm.userData = response.data;
          $log.debug(vm.userData);
        },
        function errorCallback(response) {
          $log.error({ type: response.status, msg: response.data });
      });
    }

    $scope.setUser = function() {
      $log.debug($scope.user);
      onChange();
    }

  }
})();
