!function(){"use strict";angular.module("museek",["ngAnimate","ngCookies","ngSanitize","ngMessages","ngAria","ngResource","ngRoute","ngMaterial"])}(),function(){"use strict";function e(){function e(e){var t=this;e.$on("onGetUserPlaycount",function(e,r){t.userPlaycount=r.userPlaycount})}e.$inject=["$scope"];var t={restrict:"EA",templateUrl:"app/components/tabs/tabs.html",controller:e,controllerAs:"tabsVm"};return t}angular.module("museek").directive("coreTabs",e)}(),function(){"use strict";function e(e,t,r,a){var s=this;e.$on("onGetUserTopTracks",function(e,t){t&&(s.userTopTracks=t.userTopTracks.toptracks.track,s.userPlaycount=t.userPlaycount,s.placeholderTrack=a.TRACK)})}e.$inject=["$scope","$http","$log","apiPlaceholders"],angular.module("museek").component("topTracks",{templateUrl:"app/components/listbox/top-tracks.html",controller:e})}(),function(){"use strict";function e(e,t,r,a){var s=this;e.$on("onGetUserTopArtists",function(e,t){t&&(s.userTopArtists=t.userTopArtists.topartists.artist,s.userPlaycount=t.userPlaycount,s.placeholderArtist=a.ARTIST)})}e.$inject=["$scope","$http","$log","apiPlaceholders"],angular.module("museek").component("topArtists",{templateUrl:"app/components/listbox/top-artists.html",controller:e})}(),function(){"use strict";function e(e,t,r,a){var s=this;e.$on("onGetUserTopAlbums",function(e,t){t&&(s.userTopAlbums=t.userTopAlbums.topalbums.album,s.userPlaycount=t.userPlaycount,s.placeholderAlbum=a.ALBUM)})}e.$inject=["$scope","$http","$log","apiPlaceholders"],angular.module("museek").component("topAlbums",{templateUrl:"app/components/listbox/top-albums.html",controller:e})}(),function(){"use strict";function e(e,t,r,a){var s=this;e.$on("onGetUserRecentTracks",function(e,t){t&&(s.userRecentTracks=t.userRecentTracks.recenttracks.track,s.placeholderNow=a.NOW,s.placeholderTrack=a.TRACK)})}e.$inject=["$scope","$http","$log","apiPlaceholders"],angular.module("museek").component("recentTracks",{templateUrl:"app/components/listbox/recent-tracks.html",controller:e})}(),function(){"use strict";function e(){function e(){var e=this;e.logo="assets/images/favicon.png",e.entry="Museek",e.appUrl="dubjay.2016.angularattack.io",e.teamUrl="www.angularattack.com/entries/3165-dubjay"}var t={restrict:"EA",templateUrl:"app/components/footer/footer.html",controller:e,controllerAs:"footerVm"};return t}angular.module("museek").directive("coreFooter",e)}(),function(){"use strict";function e(){function e(e,t,r,a,s){function n(t){if(t.error)i.isLoading=!1;else{var r=t.user.playcount;e.$broadcast("onGetUserPlaycount",{userPlaycount:r}),i.limit||(i.limit=a.LIMIT),s.getUserTopAlbums(i.user,i.limit,i.period).then(function(t){e.$broadcast("onGetUserTopAlbums",{userTopAlbums:t,userPlaycount:r})}),s.getUserTopArtists(i.user,i.limit,i.period).then(function(t){e.$broadcast("onGetUserTopArtists",{userTopArtists:t,userPlaycount:r})}),s.getUserTopTracks(i.user,i.limit,i.period).then(function(t){e.$broadcast("onGetUserTopTracks",{userTopTracks:t,userPlaycount:r})}),s.getUserRecentTracks(i.user,i.limit,1).then(function(t){e.$broadcast("onGetUserRecentTracks",{userRecentTracks:t,userPlaycount:r}),i.isLoading=!1})}e.$broadcast("onGetUserInfo",{data:t,user:i.user,period:i.period})}var i=this;i.logo="assets/images/logo.png",i.headline="Last.fm User Statistics",i.user=a.USER,i.period=a.PERIOD,i.periods=a.PERIODS,i.limit=a.LIMIT,i.searchUser=function(){i.isLoading=!0,s.getUserInfo(i.user).then(function(e){n(e)})}}e.$inject=["$scope","$http","$log","apiConfig","API"];var t={restrict:"EA",templateUrl:"app/components/header/header.html",controller:e,controllerAs:"headerVm"};return t}angular.module("museek").directive("coreHeader",e)}(),function(){"use strict";function e(e){return function(t){return e.trustAsResourceUrl(t)}}function t(){return function(e){switch(e){case"overall":return"Overall";case"7day":return"Last Week";case"1month":return"Last Month";case"6month":return"Last 6 Months";case"12month":return"Last Year";default:return"Undefined"}}}function r(){return function(e){return e+" scroobles"}}function a(){return function(e){return e+" % of total"}}e.$inject=["$sce"],angular.module("museek").filter("trustAsResourceUrl",e).filter("humanizePeriod",t).filter("scrobbles",r).filter("percentage",a)}(),function(){"use strict";angular.module("museek").run(["$rootScope",function(e){e.typeOf=function(e){return typeof e}}]).directive("stringToNumber",function(){return{require:"ngModel",link:function(e,t,r,a){a.$parsers.push(function(e){return""+e}),a.$formatters.push(function(e){return parseFloat(e,10)})}}})}(),function(){"use strict";function e(e,t,r,a,s){return{getUserInfo:function(n){var i=e.defer(),o=angular.element.param({method:s.GET_USER_INFO,api_key:a.API_KEY,format:a.FORMAT,user:n});return t.get(a.URL+o,{}).success(function(e){i.resolve(e)}).error(function(e){r.debug("Failed-> "+s.GET_USER_INFO,e),i.reject(e)}),i.promise},getUserTopAlbums:function(n,i,o){var l=e.defer(),m=angular.element.param({method:s.GET_USER_TOP_ALBUMS,api_key:a.API_KEY,format:a.FORMAT,user:n,period:o,limit:i});return t.get(a.URL+m,{}).success(function(e){l.resolve(e)}).error(function(e){r.debug("Failed-> "+s.GET_USER_TOP_ALBUMS,e),l.reject(e)}),l.promise},getUserTopArtists:function(n,i,o){var l=e.defer(),m=angular.element.param({method:s.GET_USER_TOP_ARTISTS,api_key:a.API_KEY,format:a.FORMAT,user:n,period:o,limit:i});return t.get(a.URL+m,{}).success(function(e){l.resolve(e)}).error(function(e){r.debug("Failed-> "+s.GET_USER_TOP_ARTISTS,e),l.reject(e)}),l.promise},getUserTopTracks:function(n,i,o){var l=e.defer(),m=angular.element.param({method:s.GET_USER_TOP_TRACKS,api_key:a.API_KEY,format:a.FORMAT,user:n,period:o,limit:i});return t.get(a.URL+m,{}).success(function(e){l.resolve(e)}).error(function(e){r.debug("Failed-> "+s.GET_USER_TOP_TRACKS,e),l.reject(e)}),l.promise},getUserRecentTracks:function(n,i,o){var l=e.defer(),m=angular.element.param({method:s.GET_USER_RECENT_TRACKS,api_key:a.API_KEY,format:a.FORMAT,user:n,limit:i,extended:o});return t.get(a.URL+m,{}).success(function(e){l.resolve(e)}).error(function(e){r.debug("Failed-> "+s.GET_USER_RECENT_TRACKS,e),l.reject(e)}),l.promise}}}e.$inject=["$q","$http","$log","apiConfig","apiMethods"],angular.module("museek").factory("API",e)}(),function(){"use strict";function e(e,t,r,a){var s=this;s.placeholderUser=a.USER,s.placeholderNow=a.NOW,e.$on("onGetUserInfo",function(e,t){s.userInfo=t})}e.$inject=["$scope","$http","$log","apiPlaceholders"],angular.module("museek").controller("MainController",e)}(),function(){"use strict";function e(e,t,r,a){var s,n=t.body;r.addEventListener("scroll",function(){clearTimeout(s),n.classList.contains("disable-hover")||n.classList.add("disable-hover"),s=a(function(){n.classList.remove("disable-hover")},500)},!1),e.debug("Museek loaded successfully.")}e.$inject=["$log","$document","$window","$timeout"],angular.module("museek").run(e)}(),function(){"use strict";function e(e,t){e.when("/",{title:"Museek",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"vm"}).otherwise({redirectTo:"/"}),t.html5Mode(!0)}e.$inject=["$routeProvider","$locationProvider"],angular.module("museek").config(e)}(),function(){"use strict";angular.module("museek").constant("apiConfig",{URL:"https://ws.audioscrobbler.com/2.0/?",API_KEY:"5d78615f919a188a79598df5687242f4",FORMAT:"json",USER:"",PERIOD:"overall",PERIODS:["overall","7day","1month","6month","12month"],LIMIT:"10"}).constant("apiMethods",{GET_USER_INFO:"user.getinfo",GET_USER_RECENT_TRACKS:"user.getrecenttracks",GET_USER_TOP_ARTISTS:"user.gettopartists",GET_USER_TOP_ALBUMS:"user.gettopalbums",GET_USER_TOP_TRACKS:"user.gettoptracks"}).constant("apiPlaceholders",{ARTIST:"http://img2-ak.lst.fm/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",ALBUM:"http://img2-ak.lst.fm/i/u/64s/c6f59c1e5e7240a4c0d427abd71f3dbb.png",TRACK:"http://img2-ak.lst.fm/i/u/64s/4128a6eb29f94943c9d206c08e625904.png",USER:"http://img2-ak.lst.fm/i/u/120s/818148bf682d429dc215c1705eb27b98.png",NOW:"http://www.last.fm/static/images/icons/eq_icon.gif?1c74c6f7f0bc"})}(),function(){"use strict";angular.module("museek").config(["$mdThemingProvider",function(e){var t=e.extendPalette("grey",{contrastDefaultColor:"light",contrastDarkColors:["50"]}),r=e.extendPalette("red",{});e.definePalette("appPrimaryTheme",t),e.definePalette("appAccentTheme",r),e.theme("default").primaryPalette("appPrimaryTheme",{"default":"900","hue-1":"700","hue-2":"500","hue-3":"300"}).accentPalette("appAccentTheme",{"default":"900","hue-1":"700"})}])}(),angular.module("museek").run(["$templateCache",function(e){e.put("app/main/main.html",'<main role=main ng-cloak><md-content flex layout-fill><div core-header ng-cloak></div><section class=content ng-show=!headerVm.isLoading ng-cloak><div class=wrapper ng-show=vm.userInfo.data.error><div class=message><md-icon class="material-icons md-48 md-accent">error_outline</md-icon><h1 class=md-title>{{ vm.userInfo.data.message }}: {{ vm.userInfo.user }}<h1></h1></h1></div></div><div class=wrapper ng-show=vm.userInfo.data.user><div class=profile><a href="{{ vm.userInfo.data.user.url }}" target=_blank><img ng-if="vm.userInfo.data.user.image[2][\'#text\']" ng-src="{{ vm.userInfo.data.user.image[2][\'#text\'] | trustAsResourceUrl }}" class=profile-img alt="{{ vm.userInfo.data.user.name }}"> <img ng-if="!vm.userInfo.data.user.image[2][\'#text\']" ng-src="{{ vm.placeholderUser | trustAsResourceUrl }}" class=profile-img alt="{{ vm.userInfo.data.user.name }}"> </a><a href="{{ vm.userInfo.data.user.url }}" target=_blank><h1 class=profile-name>{{ vm.userInfo.data.user.name }}</h1></a><p class=profile-info>{{ vm.userInfo.data.user.realname }}</p><p class=profile-info>{{ vm.userInfo.data.user.playcount | number:0 }} scrobbles</p></div><div core-tabs ng-cloak></div></div></section><div core-footer ng-show=!headerVm.isLoading ng-cloak></div></md-content></main>'),e.put("app/components/header/header.html",'<header class=header md-whiteframe=1><md-progress-linear ng-show=headerVm.isLoading class=md-accent md-mode=indeterminate></md-progress-linear><div class=wrapper><img ng-src="{{ headerVm.logo | trustAsResourceUrl }}" class=header-logo alt="Museek\'s logo"><h1 class="md-headline header-headline">{{ headerVm.headline }}</h1><form ng-submit=headerVm.searchUser() name=userForm><div layout-gt-sm=row><md-input-container class=md-block flex-gt-sm=50><label>Username</label><input type=text autofocus name=username ng-model=headerVm.user required placeholder="e.g. vandrelc or dungahk"><!-- <div ng-messages="userForm.username.$error" role="alert">\n            <div ng-message="required">This field is required.</div>\n          </div> --></md-input-container><md-input-container class=md-block flex-gt-sm=20><label>Limit</label><input type=number name=limit string-to-number ng-model=headerVm.limit placeholder="Default: 10" max=100 maxlength=3><!-- <div ng-messages="userForm.limit.$error" role="alert">\n            <div ng-message="max">Maximum Limit: 100.</div>\n          </div> --></md-input-container><md-input-container class=md-block flex-gt-sm=30><label>Period</label><md-select ng-model=headerVm.period><md-option ng-repeat="period in headerVm.periods" value="{{ period }}">{{ period | humanizePeriod }}</md-option></md-select></md-input-container></div><md-button type=submit ng-disabled=headerVm.isLoading class="md-raised md-accent btn-search"><md-icon ng-show=!headerVm.isLoading class="material-icons md-24">search</md-icon><span ng-show=headerVm.isLoading>&nbsp;Loading ...</span> <span ng-show=!headerVm.isLoading>&nbsp;Search</span></md-button></form></div></header>'),e.put("app/components/footer/footer.html",'<footer><div class=wrapper><img ng-src="{{ footerVm.logo | trustAsResourceUrl }}" class=logo alt="Museek\'s logo"><p>{{ footerVm.entry }} © 2016</p><a href="http://{{ footerVm.teamUrl }}" target=_blank><span>{{ footerVm.appUrl }}</span></a></div></footer>'),e.put("app/components/listbox/recent-tracks.html",'<md-list-item class=md-2-line ng-repeat="item in $ctrl.userRecentTracks"><a href="{{ item.url }}" target=_blank><img ng-if="item.image[1][\'#text\']" ng-src="{{ item.image[1][\'#text\'] | trustAsResourceUrl }}" class="md-avatar md-avatar-56" alt="{{ item.name }}"> <img ng-if="!item.image[1][\'#text\']" ng-src="{{ $ctrl.placeholderTrack | trustAsResourceUrl }}" class="md-avatar md-avatar-56" alt="{{ item.name }}"></a><div class=md-list-item-text><a href="{{ item.artist.url }}" target=_blank><span>{{ item.artist.name }}</span></a> <span>&nbsp;&mdash;&nbsp;</span> <a href="{{ item.url }}" target=_blank><span>{{ item.name }}</span></a><p ng-if="item.date[\'#text\']">{{ (item.date.uts * 1000) | date:\'MMM d, y - h:mm:ss a\' }}</p><p ng-if="item[\'@attr\'].nowplaying"><img ng-src="{{ $ctrl.placeholderNow }}" alt="Playing Now"> <span>&nbsp;Scrobbling Now</span></p></div><div flex=10 hide-xs class="md-list-item-text item-right"><md-icon ng-if="item.loved == 1" class="material-icons md-accent">favorite</md-icon><md-icon ng-if="item.loved == 0" class=material-icons>favorite_border</md-icon></div></md-list-item>'),e.put("app/components/listbox/top-albums.html",'<md-list-item class=md-2-line ng-repeat="item in $ctrl.userTopAlbums"><div class="md-list-item-text item-rank"><span class=md-subhead>{{ item["@attr"].rank }}</span></div><a href="{{ item.url }}" target=_blank><img ng-if="item.image[1][\'#text\']" ng-src="{{ item.image[1][\'#text\'] | trustAsResourceUrl }}" class="md-avatar md-avatar-56" alt="{{ item.name }}"> <img ng-if="!item.image[1][\'#text\']" ng-src="{{ $ctrl.placeholderAlbum | trustAsResourceUrl }}" class="md-avatar md-avatar-56" alt="{{ item.name }}"></a><div class=md-list-item-text><a href="{{ item.url }}" target=_blank><div>{{ item.name }}</div></a><a href="{{ item.artist.url }}" class=secondary target=_blank><div>{{ item.artist.name }}</div></a></div><div flex=20 hide-xs class="md-list-item-text item-right"><p>{{ item.playcount | number:0 | scrobbles }}</p><p>{{ (item.playcount / $ctrl.userPlaycount) * 100 | number:2 | percentage }}</p></div></md-list-item>'),e.put("app/components/listbox/top-artists.html",'<md-list-item class=md-2-line ng-repeat="item in $ctrl.userTopArtists"><div class="md-list-item-text item-rank"><span class=md-subhead>{{ item["@attr"].rank }}</span></div><a href="{{ item.url }}" target=_blank><img ng-if="item.image[1][\'#text\']" ng-src="{{ item.image[1][\'#text\'] | trustAsResourceUrl }}" class="md-avatar md-avatar-56" alt="{{ item.name }}"> <img ng-if="!item.image[1][\'#text\']" ng-src="{{ $ctrl.placeholderArtist | trustAsResourceUrl }}" class="md-avatar md-avatar-56" alt="{{ item.name }}"></a><div class=md-list-item-text><a href="{{ item.url }}" target=_blank><div>{{ item.name }}</div></a></div><div flex=20 hide-xs class="md-list-item-text item-right"><p>{{ item.playcount | number:0 | scrobbles }}</p><p>{{ (item.playcount / $ctrl.userPlaycount) * 100 | number:2 | percentage }}</p></div></md-list-item>'),e.put("app/components/listbox/top-tracks.html",'<md-list-item class=md-2-line ng-repeat="item in $ctrl.userTopTracks"><div class="md-list-item-text item-rank"><span class=md-subhead>{{ item["@attr"].rank }}</span></div><a href="{{ item.url }}" target=_blank><img ng-if="item.image[1][\'#text\']" ng-src="{{ item.image[1][\'#text\'] | trustAsResourceUrl }}" class="md-avatar md-avatar-56" alt="{{ item.name }}"> <img ng-if="!item.image[1][\'#text\']" ng-src="{{ $ctrl.placeholderTrack | trustAsResourceUrl }}" class="md-avatar md-avatar-56" alt="{{ item.name }}"></a><div class=md-list-item-text><a href="{{ item.url }}" target=_blank><div>{{ item.name }}</div></a><a href="{{ item.artist.url }}" class=secondary target=_blank><div>{{ item.artist.name }}</div></a></div><div flex=20 hide-xs class="md-list-item-text item-right"><p>{{ item.playcount | number:0 | scrobbles }}</p><p>{{ (item.playcount / $ctrl.userPlaycount) * 100 | number:2 | percentage }}</p></div></md-list-item>'),e.put("app/components/tabs/tabs.html",'<md-tabs md-no-ink md-stretch-tabs=auto md-center-tabs=true md-border-bottom=true md-dynamic-height=true md-selected=selectedIndex ng-if="tabsVm.userPlaycount > 0"><md-tab label="Top Artists"><md-content><top-artists></top-artists></md-content></md-tab><md-tab label="Top Albums"><md-content><top-albums></top-albums></md-content></md-tab><md-tab label="Top Tracks"><md-content><top-tracks></top-tracks></md-content></md-tab><md-tab label="Recent Tracks"><md-content><recent-tracks></recent-tracks></md-content></md-tab></md-tabs>')}]);
//# sourceMappingURL=../maps/scripts/app-342cdc499a.js.map
