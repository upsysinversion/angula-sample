'use strict';

describe('Controller: UploadfilemodalCtrl', function () {

  // load the controller's module
  beforeEach(module('gundamApp'));

  var UploadfilemodalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UploadfilemodalCtrl = $controller('UploadfilemodalCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
