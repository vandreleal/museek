(function() {
  'use strict';

  angular
    .module('museek')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {
    var now = new Date().getTime();
    var pageLoadTime = now - performance.timing.navigationStart;

    $log.debug('Museek loaded successfully in ' + pageLoadTime + ' ms.');
  }

})();
