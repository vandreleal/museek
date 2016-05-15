(function() {
  'use strict';

  angular
    .module('museek')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {
    $log.debug('Museek loaded successfully.');
  }

})();
