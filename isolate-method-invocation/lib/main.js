angular.module('myApp', [])
  .controller('myController', function($scope) {
    $scope.title = 'Header 1.0';
    $scope.subtitle = 'I\'m a controller';
    $scope.setControllerTitle = function(title, subtitle) {
      $scope.title = title;
      $scope.subtitle = subtitle;
    };
  })
  .directive('myScopedDirective', function() {
    return {
      template: '<h4>{{title}}</h4><h5>{{subtitle}}</h5><button ng-click="updateTitle({title: \'bob\'})">Bob it!</button>',
      scope : {
        updateTitle: '&msdUpdateTitle',
        subtitle: '=msdSubtitle'
      },
      link : function (scope, element, attrs) {
        scope.title = 'LonelyDirective';
      }
    };
  });