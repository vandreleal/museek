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
      controllerAs: 'tabs.vm'
    };

    return directive;

    /** @ngInject */
    function TabsController() {}
  }

})();
