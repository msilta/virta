'use strict';

angular.module('virtaApp')
  .controller('PlugInCtrl', function ($scope, $rootScope, $location, session) {
    session.plugOut();
    $scope.username = '';

    $scope.plugIn = function() {
      if ($scope.username) {
        session.plugIn($scope.username);
        $location.path("home");
      }
    };
  });
