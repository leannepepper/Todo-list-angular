'use strict'; 

angular.module('todoListApp')
.controller("mainCtrl", function($scope, dataService) {
    $scope.addTodo = function() {
        var todo = {name: "Click to Edit Me!"};
        $scope.todos.unshift(todo);
    };


    $scope.learningNgChange = function() {
        console.log("Input changed");
    };
    $scope.helloConsole = dataService.helloConsole;  
    
    $scope.todos = [
        {"name": "Feed the Dog"},
        {"name": "Water the Plants"},
        {"name": "Make a Todo List"},
        {"name": "Clean the Car"},
        {"name": "Order Take Out"},
        {"name": "Walk the Dog"}
    ];

    $scope.deleteTodo = function(todo, $index) {
        dataService.deleteTodo(todo);
        $scope.todos.splice($index, 1);
    };
 
})