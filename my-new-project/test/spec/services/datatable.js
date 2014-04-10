'use strict';

describe('Service: Datatable', function () {

  // load the service's module
  beforeEach(module('gundamApp'));

  // instantiate service
  var Datatable;
  beforeEach(inject(function (_Datatable_) {
    Datatable = _Datatable_;
  }));

  it('should do something', function () {
    expect(!!Datatable).toBe(true);
  });

});
