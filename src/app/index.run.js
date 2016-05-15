(function() {
  'use strict';

  angular
    .module('museek')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $document, $window, $timeout) {
    var body = $document.body, timer;

    $window.addEventListener('scroll', function() {
      clearTimeout(timer);
      if(!body.classList.contains('disable-hover')) {
        body.classList.add('disable-hover')
      }

      timer = $timeout(function(){
        body.classList.remove('disable-hover')
      },500);
    }, false);

    $log.debug('Museek loaded successfully.');
  }

})();
