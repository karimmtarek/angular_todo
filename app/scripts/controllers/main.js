'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoApp
 */
var app = angular.module('todoApp');

// app.config(function(RestangularProvider) {
//   RestangularProvider.setBaseUrl('http://127.0.0.1:3000/api/v1/');
// });

app.controller('MainCtrl', function ($scope, TodoService) {

  $scope.todos = [];

  TodoService.index(function(data){$scope.todos = data;});

  // $scope.todos = ['one', 'two'];

  // $scope.addTodo = function() {
  //   $scope.todos.push($scope.todo);
  //   $scope.todo = '';
  // };

  // $scope.removeTodo = function(index) {
  //   $scope.todos.splice(index, 1);
  // };
});

angular.module('todoApp').factory('TodoService', function($http){
    var index = function(success){
      $http.get('http://127.0.0.1:3000/api/v1/todos').success(success);
    };

    return {
      index: index
    };
});

