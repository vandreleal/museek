(function() {
  'use strict';

  angular
    .module('museek')
    .config(function($mdThemingProvider) {
      var appPrimaryPallete = $mdThemingProvider.extendPalette('grey', {
        'contrastDefaultColor': 'light',
        'contrastDarkColors': ['50']
        // '50':  'ffffff',
        // '100': 'f7f7f7',
        // '200': '1080f2'
        // '300': 'dddddd',
        // '400': '6699cc',
        // '500': '336699',
        // '600': '336699',
        // '700': '003366',
        // '800': '444444',
        // '900': '282828'
      });
      var appAccentPallete = $mdThemingProvider.extendPalette('red', {
        // 'contrastDefaultColor': 'light',
        // 'contrastDarkColors': ['50'],
        // '200': '1080f2'
      });

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
          'default': '700'
        });

      // Configure a theme for input
      $mdThemingProvider.theme('input', 'default')
        .primaryPalette('grey');

      // // Configure a dark theme
      // $mdThemingProvider.theme('primary-dark', 'default')
      //   .primaryPalette('yellow')
      //   .dark();
    });

})();
