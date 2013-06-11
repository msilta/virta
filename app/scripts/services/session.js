'use strict';

angular.module('virtaApp')
  .factory('session', function () {
    // Service logic
    // ...

    var mIsPluggedIn = false;
    var mUsername = '';

    // Public API here
    return {
      isPluggedIn: function () {
        return mIsPluggedIn;
      },

      getUsername: function () {
        return mUsername;
      },
  
      plugIn: function(username) {
        mIsPluggedIn = true;
        mUsername = username;
      },

      plugOut: function() {
        mIsPluggedIn = false;
        mUsername = '';
      }

    };
  });
