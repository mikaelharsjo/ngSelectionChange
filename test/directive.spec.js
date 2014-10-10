'use strict';

describe('ng-selection-changed unit tests', function() {
  var injector, scope, inputElm, element;

  beforeEach(function () {
    module('ngSelectionChange');
    inject(function(_$compile_, _$rootScope_, _$injector_) {
      injector = _$injector_;

      scope = _$rootScope_;
      inputElm = angular.element('<input type="text" ng-selection-change="selectionChange()" />');
      element = _$compile_(inputElm)(scope);
      scope.$digest();
    });
  });

  it('creates a module', function () {
    expect(injector.has('selectionChangeDirective')).toBe(true);
  });
});
