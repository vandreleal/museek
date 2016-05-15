(function() {
  'use strict';

  angular
    .module('museek')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $http, $log, placeholder) {
    var mainVm = this;
    mainVm.placeholderUser = placeholder.USER;

    $scope.$on('onSearch', function(event, evtParam) {
      mainVm.data = evtParam.data;
    });
  }
})();
