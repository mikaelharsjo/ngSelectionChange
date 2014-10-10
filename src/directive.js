'use strict';

angular.module('ngSelectionChange', [])
  .directive('selectionChange', function () {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, element, attr, ctrl) {
        element.on('keypress', function (event) {
          scope.$eval(attr.ngSelectionChange);
        });
      }
    };
  });
