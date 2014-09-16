angular.module('myApp', [])
  .controller('myController', function($scope) {
		$scope.title = 'Header 1.0';
    $scope.setControllerTitle = function(title) {
      $scope.title = title; // Changes both titles because directive scope inherits controller's scope
    };
  })
  .directive('myScopedDirective', function() {
    return {
      template: '<h4>{{title}}</h4><button ng-click="setDirectiveTitle(\'bob\')">Bob it!</button>',
      scope : {
        title: '@msdTitle'
      },
      link : function ($scope, $element, $attrs) {
        $scope.setDirectiveTitle = function (title) {
          $scope.title = title;
        };
      }
    };
  });