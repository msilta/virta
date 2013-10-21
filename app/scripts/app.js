'use strict';

angular.module('virtaApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/plug-in.html',
        controller: 'PlugInCtrl'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/projects', {
        templateUrl: 'views/project-list.html',
        controller: 'ProjectListCtrl'
      })
      .otherwise({
        redirectTo: '/'
      })
}).run(["$rootScope", "session", function($rootScope, session) {
    return $rootScope.session = session;
  }
]);
