'use strict';

angular
  .module('nganimationApp', [
    'ngAnimate',
    'ui.router'
  ])
  .controller('SidebarController', ['$scope', '$rootScope', function($scope, $rootScope) {
    function setDirection(order1, order2) {
      if (order1 < order2) {
        $scope.direction = 'forward';
      }
      else {
        $scope.direction = 'backward';
      }
    }
    $rootScope.$on("$stateChangeSuccess", function (a, b, c, d) {
      $scope.animation = b.animation;
      setDirection(b.data, d.data);
    });
  }])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
      .state('main', {
        url: "/",
        templateUrl: "views/main.html",
        data: 1,
        animation: ""
      })
      .state('substance', {
        url: "/substance",
        templateUrl: "views/substance.html",
        data: 1,
        animation: "slide"
      })
      .state('source', {
        url: "/source",
        templateUrl: "views/source.html",
        data: 2,
        animation: "slide"
      })
      .state('activity', {
        url: "/activity",
        templateUrl: "views/activity.html",
        data: 3,
        animation: "slide"
      });
  });


