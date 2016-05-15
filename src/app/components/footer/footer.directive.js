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
      controllerAs: 'footerVm'
    };

    return directive;

    /** @ngInject */
    function FooterController() {
      var footerVm = this;

      footerVm.logo = "/assets/images/favicon.png";
      footerVm.entry = "Museek";
      footerVm.appUrl = "dubjay.2016.angularattack.io"
      footerVm.teamUrl = "www.angularattack.com/entries/3165-dubjay"
    }
  }

})();
