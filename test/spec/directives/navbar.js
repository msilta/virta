'use strict';

describe('Directive: navbar', function () {
  beforeEach(module('virtaApp'));

  var element;

  it('should display navbar', inject(function ($rootScope, $compile) {
    element = angular.element('<virta-nav-bar ng-init="title=\'Title\'; username=\'Username\'; show=\'true\'" ' +
      'title="{{title}}" username="{{username}}" show="{{show}}"></virta-nav-bar>');
    element = $compile(element)($rootScope);
    /*
    expect(element.text()).toBe(
      '<div class="navbar navbar-inverse navbar-static-top" ng-show="true">' +
        '<div class="navbar-inner">' +
          '<div class="container">' +
            '<a id="logo" class="brand" href="#/home">Title</a>' +
            '<ul class="nav" ng-transclude></ul>' +
            '<div class="plugged-in">Username<span class="divider">|</span>' +
              '<a href="/#/" title="Plug out">Plug out</a>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>');
    */
  }));
});
