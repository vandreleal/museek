(function() {
  'use strict';

  angular
    .module('museek')
    .constant('config', {
      'URL'     : 'https://ws.audioscrobbler.com/2.0/?',
      'API_KEY' : '5d78615f919a188a79598df5687242f4',
      'FORMAT'  : 'json',
      'USER'    : '',
      'PERIOD'  : 'overall',
      'PERIODS' : ["overall","7day","1month","6month","12month"],
      'LIMIT'   : '10'
    })
    .constant('placeholder', {
      'ARTIST'  : 'http://img2-ak.lst.fm/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png',
      'ALBUM'   : 'http://img2-ak.lst.fm/i/u/64s/c6f59c1e5e7240a4c0d427abd71f3dbb.png',
      'TRACK'   : 'http://img2-ak.lst.fm/i/u/64s/4128a6eb29f94943c9d206c08e625904.png',
      'USER'    : 'http://img2-ak.lst.fm/i/u/120s/818148bf682d429dc215c1705eb27b98.png',
      'NOW'     : 'http://www.last.fm/static/images/icons/eq_icon.gif?1c74c6f7f0bc'
    })
    .constant('apiMethods', {
      'GET_USER_INFO'           : 'user.getinfo',
      'GET_USER_RECENT_TRACKS'  : 'user.getrecenttracks',
      'GET_USER_TOP_ARTISTS'    : 'user.gettopartists',
      'GET_USER_TOP_ALBUMS'     : 'user.gettopalbums',
      'GET_USER_TOP_TRACKS'     : 'user.gettoptracks'
    });

})();
