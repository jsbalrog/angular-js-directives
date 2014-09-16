angular.module('myApp', [])
  .controller('myController', function($scope) {
    $scope.title = 'Header 1.0';
    $scope.subtitle = 'I\'m a controller';
    $scope.setControllerTitle = function(title) {
      $scope.title = title; 
    };
  })
  .directive('myScopedDirective', function() {
    return {
      template: '<h4>{{title}}</h4><h5>{{subtitle}}</h5><button ng-click="setDirectiveTitle(\'bob\')">Bob it!</button>' +
      '<button ng-click="setDirectiveSubtitle(\'New subtitle!\')">Subtitle it!</button>',
      scope : {
        title: '@msdTitle',
        subtitle: '=msdSubtitle'
      },
      link : function (scope, element, attrs) {
        scope.setDirectiveTitle = function (title) {
          scope.title = title;
        };
        scope.setDirectiveSubtitle = function(subtitle) {
          scope.subtitle = subtitle;
        };
      }
    };
  });