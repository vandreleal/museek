(function() {
  'use strict';

  angular
    .module('museek')
    .config(function($mdThemingProvider) {
      var appPrimaryPallete = $mdThemingProvider.extendPalette('grey', {
        'contrastDefaultColor': 'light',
        'contrastDarkColors': ['50']
      });
      var appAccentPallete = $mdThemingProvider.extendPalette('red', {});

      $mdThemingProvider.definePalette('appPrimaryTheme', appPrimaryPallete);
      $mdThemingProvider.definePalette('appAccentTheme',  appAccentPallete);

      $mdThemingProvider.theme('default')
        .primaryPalette('appPrimaryTheme', {
          'default': '900',
          'hue-1': '700',
          'hue-2': '500',
          'hue-3': '300'
        })
        .accentPalette('appAccentTheme', {
          'default': '900',
          'hue-1': '700'
        });
    })
    // .config(['$compileProvider', function( $compileProvider ) {
    //   $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension):/);
    // }])
    .config(function($sceDelegateProvider) {
     $sceDelegateProvider.resourceUrlWhitelist([
       // Allow same origin resource loads.
       'self',
       // Allow loading from our assets domain.  Notice the difference between * and **.
       'http://img2-ak.lst.fm/**']);
     });

})();
