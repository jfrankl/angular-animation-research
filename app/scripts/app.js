'use strict';

/**
 * @ngdoc overview
 * @name nganimationApp
 * @description
 * # nganimationApp
 *
 * Main module of the application.
 */
 // myApp.config(function($stateProvider, $urlRouterProvider) {
 //   //
 //   // For any unmatched url, redirect to /state1
 //   $urlRouterProvider.otherwise("/state1");
 //   //
 //   // Now set up the states
 //   $stateProvider
 //     .state('state1', {
 //       url: "/state1",
 //       templateUrl: "partials/state1.html"
 //     })
 //     .state('state1.list', {
 //       url: "/list",
 //       templateUrl: "partials/state1.list.html",
 //       controller: function($scope) {
 //         $scope.items = ["A", "List", "Of", "Items"];
 //       }
 //     })
 //     .state('state2', {
 //       url: "/state2",
 //       templateUrl: "partials/state2.html"
 //     })
 //     .state('state2.list', {
 //       url: "/list",
 //       templateUrl: "partials/state2.list.html",
 //       controller: function($scope) {
 //         $scope.things = ["A", "Set", "Of", "Things"];
 //       }
 //     });
 // });


// var routerApp = angular.module('routerApp', ['ui.router']);

// routerApp.config(function($stateProvider, $urlRouterProvider) {
    
//     $urlRouterProvider.otherwise('/home');
    
//     $stateProvider
        
//         // HOME STATES AND NESTED VIEWS ========================================
//         .state('home', {
//             url: '/home',
//             templateUrl: 'partial-home.html'
//         })
        
//         // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
//         .state('about', {
//             // we'll get to this in a bit       
//         });
        
// });

angular
  .module('nganimationApp', [
    'ngAnimate',
    'ui.router'
  ])
  .controller('SidebarController', ['$scope', '$rootScope', function($scope, $rootScope) {
    function setDirection(order1, order2) {
      if (order1 < order2) {
        $scope.greeting = 'forward';
        console.log($scope.greeting, order1, order2);
      }
      else {
        $scope.greeting = 'backward';
        console.log($scope.greeting, order1, order2);
      }
    }
    $rootScope.$on("$stateChangeSuccess", function (a, b, c, d, e, f, g) {
      console.log(a, b, c, d);
      setDirection(b.data, d.data);
    });      
    // $rootScope.$on("$stateChangeSuccess", function (a, b, c, d, e, f, g) {
    //   console.log(a, b, c, d, e, f, g);
    // });
    $scope.greeting = 'backward';
  }])       
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
      .state('main', {
        url: "/",
        templateUrl: "views/main.html",
        data: 1,
      })
      .state('substance', {
        url: "/substance",
        templateUrl: "views/substance.html",
        data: 1,
      })
      .state('source', {
        url: "/source",
        templateUrl: "views/source.html",
        data: 2,
      })
      .state('activity', {
        url: "/activity",
        templateUrl: "views/activity.html",
        data: 3,
      });
  });


