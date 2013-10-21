'use strict';

angular.module('virtaApp')
  .factory('projectStorage', function () {
	  var STORAGE_ID = 'projects-temp-storage';

	  return {
		  get: function () {
			  return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
		  },

		  put: function (projects) {
			  localStorage.setItem(STORAGE_ID, JSON.stringify(projects));
		  }
	  };
  });
