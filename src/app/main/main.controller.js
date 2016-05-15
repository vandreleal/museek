(function() {
  'use strict';

  angular
    .module('museek')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $http, $log) {
    var mainVm = this;

    $scope.$on('onUserSearch', function(event, evtParam) {
      if(evtParam.obj) {
        mainVm.data = evtParam.obj;
      }
    });
  }
})();
