(function() {
  'use strict';

  angular
    .module('museek')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $timeout, $http, $log) {
    var vm = this;

    vm.method   = "user.gettopartists";
    vm.user     = "vandrelc";
    vm.api_key  = "5d78615f919a188a79598df5687242f4";
    vm.format   = "json";
    vm.period   = "overall"
    vm.limit    = "10";

    $scope.$on('onMethodChange', function(event, message) {
      if(message) {
        vm.method = message.method;
        onMethodChange();
      }
    });

    // activate();

    function onMethodChange() {
      var parameters =
        $.param({
          method  : vm.method,
          user    : vm.user,
          api_key : vm.api_key,
          period  : vm.period,
          limit   : vm.limit,
          format  : vm.format
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

  }
})();
