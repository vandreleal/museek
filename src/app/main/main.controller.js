(function() {
  'use strict';

  angular
    .module('museek')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $http, $log, apiPlaceholders) {
    var vm = this;

    vm.placeholderUser = apiPlaceholders.USER;
    vm.placeholderNow = apiPlaceholders.NOW;

    $scope.$on('onGetUserInfo', function(event, data) {
      vm.userInfo = data;
    });
  }
})();
