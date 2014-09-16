angular.module('myApp', [])
.controller('myParentController', function($scope) {
})
.directive('movieInfo', function() {
  return {
    template: '<div>' +
      '<h1>{{ name }}</h1>' +
      '<img ng-src="posters/{{ name }}.jpg" />' +
      '<div ng-transclude></div>' +
      '</div>',
    transclude: true,
    scope: {
      name: '=movieInfo'
    }
  };
});
