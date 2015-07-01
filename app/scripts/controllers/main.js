'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanApp
 */
angular.module('yeomanApp')
  .controller('MainCtrl', function ($scope,localStorageService) {
  	var todoInStore = localStorageService.get('todos');
  	$scope.todos = todoInStore && todoInStore.split('\n') || [];
    $scope.$watch('todos',function(){
    	localStorageService.add('todos', $scope.todos.join('\n'));
    },true);

    //for testing purpose
    //$scope.todos = [];
    
    $scope.addTodo = function(){
    	console.log($scope.todos);
    	if(($scope.todos.indexOf($scope.todo)<0) && $scope.todo){
    		$scope.todos.push($scope.todo);
    		$scope.todo = '';	
    	}else{
    		alert('please enter your todo list');  		
    	}
    };

    $scope.removeTodo = function(index){
    	$scope.todos.splice(index,1);
    };
  });
