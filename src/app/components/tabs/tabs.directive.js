(function() {
  'use strict';

  angular
    .module('museek')
    .directive('coreTabs', coreTabs);

  /** @ngInject */
  function coreTabs() {
    var directive = {
      restrict: 'EA',
      templateUrl: 'app/components/tabs/tabs.html',
      controller: TabsController,
      controllerAs: 'tabsVm'
    };

    return directive;

    /** @ngInject */
    function TabsController($scope) {
      var tabsVm = this;

      $scope.$on('onGetUserPlaycount', function(event, userData) {
        tabsVm.userPlaycount = userData.userPlaycount;
      });
    }
  }

})();
