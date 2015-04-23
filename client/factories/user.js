'use strict';

angular.module('checkList')
.factory('User', ['$rootScope', function($rootScope){
  function register(user){
    return $rootScope.afAuth.$createUser(user);
  }
  return {register: register};
}]);
