'use strict';

angular.module('virtaApp')
  .controller('ProjectListCtrl', function ($scope, $rootScope, $location, session, projectStorage) {

    if (!session.isPluggedIn()) {
      $location.path('');
      return;
    }

    var projects = $scope.projects = projectStorage.get();

    $scope.search = { isActive: true };

    $scope.filterProjects = function(project) {
      if ($scope.search.isActive) {
        return project.isActive;
      } else {
        return true;
      }
    };

    $scope.$watch('projects', function (newValue, oldValue) {
	    if (newValue !== oldValue) { // This prevents unneeded calls to the local storage
		    projectStorage.put(projects);
	    }
    }, true);

    $scope.addProject = function () {
	    var newProject = $scope.newProject.trim();
	    if (!newProject.length) {
		    return;
	    }

	    projects.push({
		    name: newProject,
		    isActive: true
	    });

	    $scope.newProject = '';
    };

    $scope.removeProject = function (project) {
	    projects.splice(projects.indexOf(project), 1);
    };

    /*
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
    */

  });
