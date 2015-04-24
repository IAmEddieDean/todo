'use strict';

angular.module('checkList')
.controller('TasksCtrl', ['$scope', 'Task', '$window', function($scope, Task, $window){
  $scope.addTask = function(task){
    var t ={
      title: task.title,
      dueDate: task.dueDate.getTime(),
      priority: task.priority,
      isComplete: false,
      createdAt: $window.Firebase.ServerValue.TIMESTAMP
    };
    
    Task.add(t)
    .then(function(data){
      console.log(data);
    });
  };
}]);
