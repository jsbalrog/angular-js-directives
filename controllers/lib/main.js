angular.module('myApp', []);

angular.module('myApp').controller('MyCtrl', function($scope) {

});

angular.module('myApp').directive('timePicker', function() {
var today = new Date(new Date().toDateString());
  return {
    require: '?ngModel',
    link: function(scope, elem, attrs, ngModel) {
      ngModel = ngModel || {
        "$setViewValue" : angular.noop
      };
      
      var initialized = false;
      
      setTimeout(function() {
        initialized = elem.timepicker().on('changeTime', function(ev, ui) {
          var sec = elem.timepicker('getSecondsFromMidnight');
          ngModel.$setViewValue(sec * 1000);
        });
        
        ngModel.$render = function(val) {
          if(!initialized) {
            return;
          }
          elem.timepicker('setTime', new Date(today.getTime() + val));
        };
      });
    }
  };});