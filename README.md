# Museek
[https://vandreleal.github.io/museek](https://vandreleal.github.io/museek)

> Project submitted to Angular Attack 2016, which is a 48-hour online hackathon featuring Angular. Museek provides the ability to search and visualize any Last.fm user's statistics. [Angular Attack Entry Link](https://www.angularattack.com/entries/3165-dubjay)

## Screenshots
![Museek](https://raw.githubusercontent.com/vandreleal/museek/master/screenshots/01-museek.jpeg)

![Top Artists](https://raw.githubusercontent.com/vandreleal/museek/master/screenshots/02-museek__top-artists.jpeg)

![Recent Tracks](https://raw.githubusercontent.com/vandreleal/museek/master/screenshots/03-museek__recent-tracks.jpeg)

## Description

#### Configurable Last.fm API Parameters:
+ User
+ Limit
+ Period

#### Supported Methods:
+ [user.getInfo](http://www.last.fm/api/show/user.getInfo "user.getInfo")
+ [user.getTopAlbums](http://www.last.fm/api/show/user.getTopAlbums "user.getTopAlbums")
+ [user.getTopArtists](http://www.last.fm/api/show/user.getTopArtists "user.getTopArtists")
+ [user.getTopTracks](http://www.last.fm/api/show/user.getTopTracks "user.getTopTracks")
+ [user.getRecentTracks](http://www.last.fm/api/show/user.getRecentTracks "user.getRecentTracks")

## Instructions

#### 1. Fill out the following fields and click on the search button:
+ User (Required)
+ Limit (Optional) [default: 10 | max: 100]
+ Period (Optional) [default: overall]

#### 2. Click on any of the following tabs to check the desired user's data:
+ Top Artists
+ Top Albums
+ Top Tracks
+ Recent Tracks

## Built with
+ [Last.fm API](http://www.last.fm/pt/api 'Last.fm API')
+ [Angular Material](https://material.angularjs.org/latest/ 'Angular Material')
+ [Material Colors](https://github.com/shuhei/material-colors 'Material Colors')
+ [Gulp](http://gulpjs.com/  'Gulp')
+ [Sass](http://sass-lang.com/  'Sass')
+ [Wiredep](https://github.com/taptapship/wiredep  'Wiredep')
+ [BrowserSync](https://www.browsersync.io/ 'BrowserSync')
+ [Wrench](https://github.com/ryanmcgrath/wrench-js 'Wrench')
