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
        {"name": "feed the dog"},
        {"name": "pet the dog"},
        {"name": "play with the dog"},
        {"name": "Tell the dog you love him"},
        {"name": "Hold the dog untill he barks"},
        {"name": "Say hi to husband"}
    ];

    $scope.deleteTodo = function(todo, $index) {
        dataService.deleteTodo(todo);
        $scope.todos.splice($index, 1);
    };
 
})