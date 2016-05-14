(function() {
  'use strict';

  angular
    .module('museek')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $timeout, $http, $log) {
    var vm = this;

    $scope.method   = "user.gettopartists";
    $scope.user     = "";
    $scope.api_key  = "5d78615f919a188a79598df5687242f4";
    $scope.format   = "json";
    $scope.period   = "overall"
    $scope.limit    = "10";

    $scope.periods = ["overall","7day","1month","6month","12month"];

    // activate();

    function onUserChange() {
      var parameters =
        $.param({
          method  : "user.getinfo",
          user    : $scope.user,
          api_key : $scope.api_key,
          format  : $scope.format
        });

      $log.debug(parameters);

      var requestUserInfo = {
        method: 'GET',
        url: "http://ws.audioscrobbler.com/2.0/?" + parameters,
        headers: { },
        data: { }
      }

      $http(requestUserInfo).then(function successCallback(response) {
          $scope.userInfo = response.data;
          $log.debug($scope.userInfo);
        },
        function errorCallback(response) {
          $log.error({ type: response.status, msg: response.data });
      });
    }

    function onMethodChange() {
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

      var requestUserTop = {
        method: 'GET',
        url: "http://ws.audioscrobbler.com/2.0/?" + parameters,
        headers: { },
        data: { }
      }

      $http(requestUserTop).then(function successCallback(response) {
          $scope.userTop = response.data;
          $log.debug($scope.userTop);
        },
        function errorCallback(response) {
          $log.error({ type: response.status, msg: response.data });
      });
    }

    $scope.setUser = function() {
      onUserChange();
      onMethodChange();
    }

    $scope.$on('onMethodChange', function(event, message) {
      if(message) {
        $scope.method = message.method;
        onMethodChange();
      }
    });
  }
})();
