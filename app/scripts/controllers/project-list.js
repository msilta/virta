'use strict';

angular.module('virtaApp')
  .controller('ProjectListCtrl', function ($scope, $rootScope, $location, session) {

    if (!session.isPluggedIn()) {
      $location.path('');
      return;
    }

    $scope.search = { isActive: true };

    $scope.filterProjects = function(project) {
      if ($scope.search.isActive) {
        return project.isActive;
      } else {
        return true;
      }
    };

    var projects = [
      {
        id: 10,
        name: 'Project One',
        scrumMaster: 'TeroM',
        productOwner: 'Skele',
        isActive: true
      },
      {
        id: 9,
        name: 'Project Two',
        scrumMaster: 'Uuno',
        productOwner: 'Kalle',
        isActive: true
      },
      {
        id: 8,  
        name: 'Project Three',
        scrumMaster: 'Spede',
        productOwner: 'Sörsselssön',
        isActive: false
      },
      {
        id: 7,
        name: 'Project Four',
        scrumMaster: 'Kuosmanen',
        productOwner: 'Seppo',
        isActive: false
      },
      {
        id: 6,
        name: 'Project Fifteen',
        scrumMaster: 'Sakke',
        productOwner: 'Keke',
        isActive: false
      }
    ];

    $scope.projects = projects;

  });
