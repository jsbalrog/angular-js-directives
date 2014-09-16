angular.module('myApp', [])
.controller('myParentController', function($scope) {
  $scope.title = 'Heading 1.0';
  $scope.setAppTitle = function(title) {
    $scope.title = title;
  };
})
.directive('myScopedDirective', function() {
  return {
    scope: false, // this is the default
    link: function(scope, element, attrs) {
      scope.setDirectiveTitle = function(title) {
        scope.title = title;
      };
    }
  };
});