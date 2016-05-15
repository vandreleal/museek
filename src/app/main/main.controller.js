(function() {
  'use strict';

  angular
    .module('museek')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $http, $log, placeholder) {
    var vm = this;
    vm.placeholderUser = placeholder.USER;
    vm.placeholderNow = placeholder.NOW;

    $scope.$on('onSearch', function(event, evtParam) {
      vm.response = evtParam;
    });
  }
})();
