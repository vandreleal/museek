(function() {
  'use strict';

  angular
    .module('museek')
    .directive('coreFooter', coreFooter);

  /** @ngInject */
  function coreFooter() {
    var directive = {
      restrict: 'EA',
      templateUrl: 'app/components/footer/footer.html',
      controller: FooterController,
      controllerAs: 'footerVm'
    };

    return directive;

    /** @ngInject */
    function FooterController() {
      var footerVm = this;

      footerVm.app = "Museek";
      footerVm.logo = "assets/images/favicon.png";
      footerVm.year = "2016";
    }
  }

})();
