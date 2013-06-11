'use strict';

angular.module('virtaApp')
  .controller('HomeCtrl', function ($scope, $rootScope, $location, session) {

    if (!session.isPluggedIn()) {
      $location.path('');
      return;
    }

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
