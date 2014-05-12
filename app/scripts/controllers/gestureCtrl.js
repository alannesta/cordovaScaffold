angular.module('cordovaTestApp')
.controller('gestureCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
  var newItem = 0;
  $scope.items = [
  'HTML5 Boilerplate',
  'AngularJS',
  'Karma'
  ];

  var el = document.getElementById('drag');
  
  Hammer(el).on('dragend', function(){
    // console.log('dragend');
    $scope.items.push(newItem);
    newItem = newItem + 1;
    $scope.$apply();
  });

  $scope.onReload = function(){
      // alert('fuck');
      // var deferred = $q.deferred();

      // var promise = $timeout(function(){
      //   $scope.items.push(newItem);
      //   newItem = newItem + 1;
      // },3000);

      // promise.then(console.log('resolved'));
  }
  
}]);