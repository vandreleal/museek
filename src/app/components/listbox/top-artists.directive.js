(function() {
  'use strict';

  angular
    .module('museek')
    .component('topArtists', {
      templateUrl: 'app/components/listbox/top-artists.html',
      controller: TopArtistsController
      // scope: {
      //   artists: "="
      // }
    });

  /** @ngInject */
  function TopArtistsController($rootScope, $scope, $http, $log) {
    var ctrl = this;

    ctrl.method   = "user.gettopartists";
    $log.debug(ctrl.method);
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

    // var requestCards = {
    //   method: 'GET',
    //   url: "mock/summary/cards.data.json",
    //   headers: { },
    //   data: { }
    // }
    //
    // $http(requestCards).then(function successCallback(response) {
    //     cards = response.data;
    //
    //     for(var i = 0; i < cards.length; i++) {
    //       if(cards[i].name.trim().toLowerCase() == ctrl.name.trim().toLowerCase()) {
    //         ctrl.value = cards[i].count;
    //       }
    //     }
    //   },
    //   function errorCallback() {
    //     ctrl.value = "-";
    // });
  }
})();
