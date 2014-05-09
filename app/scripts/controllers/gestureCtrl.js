angular.module('cordovaTestApp')
  .controller('gestureCtrl', function ($scope) {
    $scope.items = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.onReload = function(){
    	var newItem = 'fuck';
    	$scope.items.push(newItem);
    	newItem = newItem + 1;
    }

  });
