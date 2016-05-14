(function() {
  'use strict';

  angular
    .module('museek')
    .component('topArtists', {
      templateUrl: 'app/components/listbox/top-artists.html',
      controller: TopArtistsController
    });

  /** @ngInject */
  function TopArtistsController($scope, $http, $log, config, apiMethods) {
    var ctrl = this;

    // $scope.on('onRetrieve', {
    //   user: vm.user,
    //   period: vm.period,
    //   limit: vm.limit
    // });

    // $scope.api_key  = "5d78615f919a188a79598df5687242f4";
    // $scope.format   = "json";
    // $scope.period   = "overall"
    // $scope.limit    = "10";

    // function onUserChange() {
    //   var parameters =
    //     $.param({
    //       method  : $scope.method,
    //       user    : $rootScope.user,
    //       api_key : $rootScope.api_key,
    //       period  : $rootScope.period,
    //       limit   : $scope.limit,
    //       format  : $scope.format
    //     });
    //
    //   $log.debug("top-artists-> " + parameters);
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
  }
})();
