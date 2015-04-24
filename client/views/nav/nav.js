'use strict';

angular.module('checkList')
.controller('NavCtrl', ['$scope', 'User', '$state', '$rootScope', function($scope, User, $state, $rootScope){
  
  $scope.afAuth.$onAuth(function(data){
    if(data){
      $rootScope.activeUser = data;
    }else{
      $rootScope.activeUser = null;
    }
      $state.go('home');
  });

  $scope.logout = function(){
    User.logout();
  };
}]);
