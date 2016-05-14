(function() {
  'use strict';

  angular
    .module('museek')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($routeProvider) {
    $routeProvider
      .when('/', {
        title: "Museek",
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'vm',
        bindToController: true
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
