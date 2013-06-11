'use strict';

angular.module('virtaApp').directive('virtaNavBar', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      'title': '@title',
      'currentUser': '@username',
      'showNavbar': '@show'
    },
    template:
      '<div class="navbar navbar-inverse navbar-static-top" ng-show="showNavbar">' +
        '<div class="navbar-inner">' +
          '<div class="container">' +
            '<a id="logo" class="brand" href="#/home">{{title}}</a>' +
            '<ul class="nav" ng-transclude></ul>' +
            '<div class="plugged-in">{{currentUser}}<span class="divider">|</span>' +
              '<a href="/#/" title="Plug out">Plug out</a>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>',
    replace: true
  };
}).directive('virtaNavItem', function($location) {
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
