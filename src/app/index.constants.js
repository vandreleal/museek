/* global moment:false */
(function() {
  'use strict';

  angular
    .module('museek')
    .constant('moment', moment)
    .constant('config', {
      'URL'     : 'http://ws.audioscrobbler.com/2.0/?',
      'API_KEY' : '5d78615f919a188a79598df5687242f4',
      'FORMAT'  : 'json',
      'PERIOD'  : 'overall',
      'USER'    : 'rj',
      'LIMIT'   : '10'
    })
    .constant('apiMethods', {
      'GET_USER_INFO'           : 'user.getinfo',
      'GET_USER_RECENT_TRACKS'  : 'user.getrecenttracks',
      'GET_USER_TOP_ARTISTS'    : 'user.gettopartists',
      'GET_USER_TOP_ALBUMS'     : 'user.gettopartists',
      'GET_USER_TOP_TRACKS'     : 'user.gettoptracks'
    });

})();
