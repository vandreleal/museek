(function() {
  'use strict';

  angular
    .module('webapp')
    .component('coreListbox', {
      templateUrl: 'app/components/listbox/listbox.html',
      controller: ListboxController,
      bindings: {
        data: "@"
      }
    });

  /** @ngInject */
  function ListboxController($scope, $http, $log) {
    var ctrl = this;

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
