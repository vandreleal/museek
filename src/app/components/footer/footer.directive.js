(function() {
  'use strict';

  angular
    .module('museek')
    .directive('coreFooter', coreFooter);

  /** @ngInject */
  function coreFooter() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/footer/footer.html',
      controller: FooterController,
      controllerAs: 'footer.vm'
    };

    return directive;

    /** @ngInject */
    function FooterController() {
    }
  }

})();
