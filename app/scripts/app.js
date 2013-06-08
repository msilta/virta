'use strict';

/*
angular.module('virtaApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
*/

angular.module('virtaApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html'
      })
      .otherwise({
        redirectTo: '/'
      })
}).directive('navBarTop', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      'title': '@'
    },
    template:
      '<div class="navbar navbar-inverse navbar-fixed-top">' +
        '<div class="navbar-inner">' +
          '<div class="container">' +
            '<a class="brand" href="#/">{{title}}</a>' +
            '<ul class="nav" ng-transclude></ul>' +
          '</div>' +
        '</div>' +
      '</div>',
    replace: true
  };
}).directive('navLocation', function($location) {
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      'href': '@'
    },
    link: function (scope) {
      scope.location = function (href) {
        return href.substr(1) === $location.url();
      };
    },
    template: '<li ng-class="{active: location(href)}">' +
        '<a href="{{href}}" ng-transclude></a>' +
      '</li>',
    replace: true
  };
});
