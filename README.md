ngSelectionChange
=================

Evaluates the given expression when the user changes the selection. Selection means selecting parts of the text with mouse or keyboard. If the selection is empty (start and end is the same) it returns the position of the caret instead. This means that you can use this to catch when a user is arrowing backwards and forwards. The expression is evaluated immediately. The expression is note evaluted when the value change is coming from the model.

## Requirements
An element that has the `selectionStart` property, like `HTMLInputElement` or `TextArea`. A modern browser.

## Usage
    <input ng-selection-change="">
    ...
    </input>
    
## Example
    <script>
    angular.module('example', [])
      .controller('ExampleCtrl', ['$scope', function($scope) {
        $scope.selectedText = '';
        $scope.selectionChange = function(selText) {
          $scope.selectedText = selText;
        };
      }]);
    </script>
    <div ng-controller="ExampleCtrl">
      <input type="text" ng-model="selectedText" ng-selection-change="selectionChange()" />
      <tt>debug = {{selectedText}}</tt>
    </div>
