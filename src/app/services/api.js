(function() {
    'use strict';

    angular
      .module('museek')
      .factory('API', APIMethods);

    /** @ngInject */
    function APIMethods($q, $http, $log, config, apiMethods) {
      return {

        getUserInfo: function(user) {
          var ret = $q.defer();

          var parameters =
            angular.element.param({
              method: apiMethods.GET_USER_INFO,
              api_key: config.API_KEY,
              format: config.FORMAT,
              user: user
            });

          $http.get(config.URL + parameters, {}).success(function(r) {
            // $log.debug('Sucess-> ' + apiMethods.GET_USER_INFO, r);
            ret.resolve(r);
          }).error(function(err) {
            $log.debug('Failed-> ' + apiMethods.GET_USER_INFO, err);
            ret.reject(err);
          });

          return ret.promise;
        },

        getUserTopAlbums: function(user, limit, period) {
          var ret = $q.defer();

          var parameters =
            angular.element.param({
              method: apiMethods.GET_USER_TOP_ALBUMS,
              api_key: config.API_KEY,
              format: config.FORMAT,
              user: user,
              period: period,
              limit: limit
            });

          $http.get(config.URL + parameters, {}).success(function(r) {
            // $log.debug('Sucess-> ' + apiMethods.GET_USER_TOP_ALBUMS, r);
            ret.resolve(r);
          }).error(function(err) {
            $log.debug('Failed-> ' + apiMethods.GET_USER_TOP_ALBUMS, err);
            ret.reject(err);
          });

          return ret.promise;
        },

        getUserTopArtists: function(user, limit, period) {
          var ret = $q.defer();

          var parameters =
            angular.element.param({
              method: apiMethods.GET_USER_TOP_ARTISTS,
              api_key: config.API_KEY,
              format: config.FORMAT,
              user: user,
              period: period,
              limit: limit
            });

          $http.get(config.URL + parameters, {}).success(function(r) {
            // $log.debug('Sucess-> ' + apiMethods.GET_USER_TOP_ARTISTS, r);
            ret.resolve(r);
          }).error(function(err) {
            $log.debug('Failed-> ' + apiMethods.GET_USER_TOP_ARTISTS, err);
            ret.reject(err);
          });

          return ret.promise;
        },


        getUserTopTracks: function(user, limit, period) {
          var ret = $q.defer();

          var parameters =
            angular.element.param({
              method: apiMethods.GET_USER_TOP_TRACKS,
              api_key: config.API_KEY,
              format: config.FORMAT,
              user: user,
              period: period,
              limit: limit
            });

          $http.get(config.URL + parameters, {}).success(function(r) {
            // $log.debug('Sucess-> ' + apiMethods.GET_USER_TOP_TRACKS, r);
            ret.resolve(r);
          }).error(function(err) {
            $log.debug('Failed-> ' + apiMethods.GET_USER_TOP_TRACKS, err);
            ret.reject(err);
          });

          return ret.promise;
        },


        getUserRecentTracks: function(user, limit, extended) {
          var ret = $q.defer();

          var parameters =
            angular.element.param({
              method: apiMethods.GET_USER_RECENT_TRACKS,
              api_key: config.API_KEY,
              format: config.FORMAT,
              user: user,
              limit: limit,
              extended: extended
            });

          $http.get(config.URL + parameters, {}).success(function(r) {
            // $log.debug('Sucess-> ' + apiMethods.GET_USER_RECENT_TRACKS, r);
            ret.resolve(r);
          }).error(function(err) {
            $log.debug('Failed-> ' + apiMethods.GET_USER_RECENT_TRACKS, err);
            ret.reject(err);
          });

          return ret.promise;
        }
      }
    }

})();
