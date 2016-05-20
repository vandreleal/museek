(function() {
  'use strict';

  angular
    .module('museek')
    .filter('trustAsResourceUrl', trustAsResourceUrl);

  /** @ngInject */
  function trustAsResourceUrl($sce) {
    return function(val) {
      return $sce.trustAsResourceUrl(val);
    };
  }
})();
