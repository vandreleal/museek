(function() {
  'use strict';

  angular
    .module('museek')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $http, $log) {
    var mainVm = this;

    $scope.$on('onSearch', function(event, evtParam) {
      mainVm.data = evtParam.data;
    });
  }
})();
