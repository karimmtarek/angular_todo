'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('MainCtrl', function ($scope, TodoService) {
    $scope.todos = [];

   TodoService.index(function(data){$scope.todos = data;});
  // $resource
  // $restangular
});

angular.module('todoApp').factory('TodoService', function($http){
    var index = function(success){
      $http.get('http://127.0.0.1:3000/api/v1/todos').success(success);
    };

    return {
      index: index
    };
});