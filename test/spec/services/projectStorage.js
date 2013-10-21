'use strict';

describe('Service: projectStorage', function () {

  // load the service's module
  beforeEach(module('virtaApp'));

  // instantiate service
  var projectStorage;
  beforeEach(inject(function (_projectStorage_) {
    projectStorage = _projectStorage_;
  }));

  it('should do something', function () {
    expect(!!projectStorage).toBe(true);
  });

});
