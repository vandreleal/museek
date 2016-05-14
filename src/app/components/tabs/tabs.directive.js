(function() {
  'use strict';

  angular
    .module('museek')
    .directive('coreTabs', coreTabs);

  /** @ngInject */
  function coreTabs() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/tabs/tabs.html',
      controller: TabsController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function TabsController($scope) {

      // Initialize scope variables.
      $scope.method = "user.gettopartists";

      $scope.tabs = [
        {label: "Top Artists",  method: "user.gettopartists"},
        {label: "Top Albums",   method: "user.gettopalbums"},
        {label: "Top Tracks",   method: "user.gettoptracks"}
      ]

      // Set method function.
      $scope.setMethod = function(tab) {

        switch(tab.method) {

          case "user.gettopartists":
            break;

          case "user.getalbums":
            break;

          case "user.gettracks":
            break;

          default:
            break;
        }

        $scope.method = tab.method;
      }

      // Watch and broadcast method changes.
      $scope.$watch('method', function() {
        $scope.$broadcast('onMethodChange', {
          method: $scope.method
        });
      });
    }
  }

})();
