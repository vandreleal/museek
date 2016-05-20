(function() {
  'use strict';

  angular
    .module('museek')
    .filter('trustAsResourceUrl', trustAsResourceUrl)
    .filter('humanizePeriod', humanizePeriod);

  /** @ngInject */
  function trustAsResourceUrl($sce) {
    return function(url) {
      return $sce.trustAsResourceUrl(url);
    };
  }

  /** @ngInject */
  function humanizePeriod() {
    return function(period) {

      switch (period) {

        case 'overall':
          return 'Overall';

        case '7day':
          return 'Last Week';

        case '1month':
          return 'Last Month';

        case '6month':
          return 'Last 6 Months';

        case '12month':
          return 'Last Year';

        default:
          return 'Undefined';

      }
    };
  }
})();
