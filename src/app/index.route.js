(function() {
  'use strict';

  angular
    .module('museek')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        title: "Museek",
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });

      // use the HTML5 History API
      $locationProvider.html5Mode(true);
  }

})();
