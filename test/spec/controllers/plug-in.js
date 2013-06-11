'use strict';

describe('Controller: PlugInCtrl', function () {

  // load the controller's module
  beforeEach(module('virtaApp'));

  var PlugInCtrl, scope, sess;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $location, session) {
    scope = $rootScope.$new();
    sess = session;
    sess.plugIn('old_username');
    window.location = '/#/somewhere';

    PlugInCtrl = $controller('PlugInCtrl', {
      $scope: scope,
      session: sess
    });
  }));

  it('should clear username', function () {
    expect(scope.username).toBe('');
  });

  it('should plug out possible users', function () {
    expect(sess.isPluggedIn()).toBe(false);
    expect(sess.getUsername()).toBe('');
  });

  it('should be able to plug in', function () {
    scope.username = 'plugged_in';
    scope.plugIn();

    expect(sess.isPluggedIn()).toBe(true);
    expect(sess.getUsername()).toBe('plugged_in');
  });
});
