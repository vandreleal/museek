(function() {
  'use strict';

  angular
    .module('museek')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($rootScope, $scope, $timeout, $http, $log) {
    var vm = this;

    $rootScope.api_key  = "5d78615f919a188a79598df5687242f4";
    $rootScope.format   = "json";

    vm.periods = ["overall","7day","1month","6month","12month"];
    vm.user   = "vandrelc";
    vm.period = "overall";
    vm.limit  = "10";

    $log.debug(vm);

    function onUserRetrieve() {
      var parameters =
        $.param({
          method  : "user.getinfo",
          user    : vm.user,
          api_key : $rootScope.api_key,
          format  : $rootScope.format
        });

      $log.debug(parameters);

      var requestUserInfo = {
        method: 'GET',
        url: "http://ws.audioscrobbler.com/2.0/?" + parameters,
        headers: { },
        data: { }
      }

      $http(requestUserInfo).then(function successCallback(response) {
          vm.userInfo = response.data;
          $log.debug(vm.userInfo);
        },
        function errorCallback(response) {
          $log.error({ type: response.status, msg: response.data });
      });
    }

    // function onMethodChange() {
    //   var parameters =
    //     $.param({
    //       method  : $scope.method,
    //       user    : $rootScope.user,
    //       api_key : $rootScope.api_key,
    //       format  : $rootScope.format,
    //       period  : $scope.period,
    //       limit   : $scope.limit,
    //     });
    //
    //   $log.debug(parameters);
    //
    //   var requestUserTop = {
    //     method: 'GET',
    //     url: "http://ws.audioscrobbler.com/2.0/?" + parameters,
    //     headers: { },
    //     data: { }
    //   }
    //
    //   $http(requestUserTop).then(function successCallback(response) {
    //       $scope.userTop = response.data;
    //       $log.debug($scope.userTop);
    //     },
    //     function errorCallback(response) {
    //       $log.error({ type: response.status, msg: response.data });
    //   });
    // }

    vm.setUser = function() {
      onUserRetrieve();
      // onMethodChange();

      $scope.$broadcast('onRetrieve', {
        user: vm.user,
        period: vm.period,
        limit: vm.limit
      });
    }

    // $scope.$on('onMethodChange', function(event, message) {
    //   if(message) {
    //     $scope.method = message.method;
    //     onMethodChange();
    //   }
    // });
  }
})();
