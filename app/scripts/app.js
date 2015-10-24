'use strict';

/**
 * @ngdoc overview
 * @name nganimationApp
 * @description
 * # nganimationApp
 *
 * Main module of the application.
 */
angular
  .module('nganimationApp', [
    'ngAnimate',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/source', {
        templateUrl: 'views/source.html',
        controller: 'AboutCtrl',
        controllerAs: 'about',
        data: {a: 1},
      })
      .when('/activity', {
        templateUrl: 'views/activity.html',
        controller: 'AboutCtrl',
        controllerAs: 'about',
        data: {a: 1},
      })
      .when('/substance', {
        templateUrl: 'views/substance.html',
        controller: 'AboutCtrl',
        controllerAs: 'about',
        data: {a: 1},
      })
      .otherwise({
        redirectTo: '/'
      });
  });
