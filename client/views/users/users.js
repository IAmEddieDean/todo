'use strict';

angular.module('checkList')
.controller('UsersCtrl', ['$scope', 'User', function($scope, User){
  $scope.submit = function(user){
    User.register(user)
    .then(function(data){
      console.log(data);
    })
    .catch(function(err){
      console.error(err);
    });
  };
}]);
