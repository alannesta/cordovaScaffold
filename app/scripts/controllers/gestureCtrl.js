angular.module('cordovaTestApp')
.controller('gestureCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
  var newItem = 0;
  $scope.items = [
  'HTML5 Boilerplate',
  'AngularJS',
  'Karma'
  ];

  var el = document.getElementById('drag');
  
  Hammer(el).on('dragend', function(ev){
    //ev.preventDefault();    //prevent the browser default handling of drag gestures on mobile device
    // console.log(ev);
    if (ev.gesture.deltaY>100){   //related info about this move
      $scope.items.push(newItem);
      newItem = newItem + 1;
      $scope.$apply();
      ev.gesture.stopDetect();    //finish the current detection session
    }
  });
}]);