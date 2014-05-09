'use strict';

angular
  .module('cordovaTestApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'mgcrea.pullToRefresh'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      }).
      when('/gesture', {
        templateUrl: 'views/gesture.html',
        controller: 'gestureCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
