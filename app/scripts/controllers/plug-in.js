'use strict';

angular.module('virtaApp')
  .controller('PlugInCtrl', function ($scope, $rootScope, $location, session) {
    session.plugOut();
    $scope.username = '';

    $scope.plugIn = function() {
      session.plugIn($scope.username);
      //window.location = '/#/home';
      $location.path("home");
    };
  });
